import React, { ReactElement, useState, useEffect } from "react";

import Container from 'react-bootstrap/Container';
import CodeDisplay from "../../components/CodeDisplay/CodeDisplay";
import Table from 'react-bootstrap/Table';
import useRequest from "../../api/useRequest";

export default function Payments(): ReactElement {
    const [requestedData, loadingData, errorData, reFetchData] = useRequest(`http://localhost:3001/api/generator`);
    const [generatorCode, setGeneratorCode] = useState();
	const [secretCode, setSecretCode] = useState('');
	const [secretCodeCount, setSecretCodeCount] = useState(0);

    useEffect(() => {
		let gridUpdate: any;
		
        gridUpdate = setInterval(() => {
            reFetchData();
            setGeneratorCode(requestedData?.code);
            setSecretCodeCount(secretCodeCount + 1);

            if(secretCodeCount % 2 === 0) {
                setSecretCode(requestedData?.secret);
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
				<form className="d-flex flex-row">
                    <div className="me-lg-3">
                        <label className="control-label col-sm-3 small" htmlFor="char-search">Payment</label>
          			    <input type="text" id="char-search" className="form-control form-control-dark" placeholder="Payment" aria-label="Search" />
                    </div>
					
                    <div className="me-lg-3">
                        <label className="control-label col-sm-3 small" htmlFor="char-search">Amount</label>
          			    <input type="number" id="char-search" className="form-control form-control-dark" placeholder="Amount" aria-label="Search" />
                    </div>
        		</form>

				<button type="button" className="btn btn-primary">+ ADD</button>
			</div>

            <Table bordered responsive>
                <thead>
                    <tr>
                        <th scope="col">NAME</th>
                        <th scope="col">AMOUNT</th>
                        <th scope="col">CODE</th>
                        <th scope="col">GRID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-top-0">
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                </tbody>
            </Table>
		</Container>
    );
}