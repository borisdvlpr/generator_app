import React, { ReactElement, useState, useEffect } from "react";

import Container from 'react-bootstrap/Container';
import CodeDisplay from '../../components/CodeDisplay/CodeDisplay';
import PaymentsTable from "../../components/PaymentsTable/PaymentsTable";
import useGenerator from '../../api/useGenerator';
import usePayment from '../../api/usePayment';

export default function Payments(): ReactElement {
    const [dataGenerator, loadingGenerator, errorGenerator, reFetchGenerator] = useGenerator(`http://localhost:3001/api/generator`);
    const [dataPayments, loadingPayments, errorPayments, reFetchPayments, postPayments] = usePayment(`http://localhost:3001/api/payments`);
    const [generatorCode, setGeneratorCode] = useState('');
	const [secretCode, setSecretCode] = useState('');
	const [secretCodeCount, setSecretCodeCount] = useState(0);
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');

    function handleFormSubmit(event: any) {
        event.preventDefault();

        if(name && amount && generatorCode && secretCode) {
            postPayments(name, amount, secretCode, generatorCode.toString());

            reFetchPayments();
            setName('');
            setAmount('');

        } else {
            alert('Fill all fields!');
        }
    }

    useEffect(() => {
		let gridUpdate: any;
		
        gridUpdate = setInterval(() => {
            reFetchGenerator();
            setGeneratorCode(dataGenerator?.code);
            setSecretCodeCount(secretCodeCount + 1);

            if(secretCodeCount % 2 === 0) {
                setSecretCode(dataGenerator?.secret);
            }
        }, 1000);

        return () => { 
            clearInterval(gridUpdate); 
        };
    });

    return (
        <Container>
            <CodeDisplay displayMessage="YOUR CODE NOW" secretCode={secretCode} />

            <div className="d-flex flex-row align-items-end justify-content-start mt-5 mb-5">
				<form className="d-flex flex-row" onSubmit={(event) => handleFormSubmit(event)}>
                    <div className="me-lg-3">
                        <label className="control-label col-sm-3 small" htmlFor="input-name">Payment</label>
          			    <input type="text" id="input-name" className="form-control form-control-dark" value={name} placeholder="Payment" onChange={(event) => setName(event.target?.value)} />
                    </div>
					
                    <div className="me-lg-3">
                        <label className="control-label col-sm-3 small" htmlFor="input-amount">Amount</label>
          			    <input type="text" id="input-amount" className="form-control form-control-dark" value={amount} placeholder="Amount" onChange={(event) => setAmount(event.target?.value)} />
                    </div>

                    <div className="align-self-end">
                        <button type="submit" className="btn btn-primary">+ ADD</button>
                    </div>
        		</form>
			</div>

            <PaymentsTable paymentsData={dataPayments} />
		</Container>
    );
}