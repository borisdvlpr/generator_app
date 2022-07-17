import React, { ReactElement, useState, useEffect } from "react";

import Container from 'react-bootstrap/Container';
import CodeDisplay from "../../components/CodeDisplay/CodeDisplay";
import TableComponent from "../../components/Table/Table";
import useRequest from "../../api/useRequest";

export default function Generator(): ReactElement {
	const [requestedData, loadingData, errorData, reFetchData] = useRequest(`http://localhost:3001/api/generator`);
	const [generatorCode, setGeneratorCode] = useState();
	const [secretCode, setSecretCode] = useState('');
	const [secretCodeCount, setSecretCodeCount] = useState(0)
	const [isRequested, setRequested] = useState(false);
	
	function onClickGenerate() {
		if(!loadingData && !errorData && !isRequested) {
			setRequested(true);
			setGeneratorCode(requestedData?.code);
			setSecretCode(requestedData?.secret);

		} else {
			if(errorData) {
				console.log(errorData);
			}
		}
	}

	useEffect(() => {
		let gridUpdate: any;
		
		if(isRequested) {
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
		}
	});
	
 	return (
		<Container>
			<div className="d-flex flex-wrap align-items-center justify-content-between mt-5 mb-5">
				<form className="col-12 col-lg-auto mb-lg-0 me-lg-3">
					<label className="control-label col-sm-3 small" htmlFor="char-search">Character</label>
          			<input type="text" id="char-search" className="form-control form-control-dark" placeholder="Character" maxLength={1} aria-label="Search" />
        		</form>

				<button type="button" className="btn btn-primary" onClick={() => onClickGenerate()}>Generate 2D Grid</button>
			</div>
		
			<TableComponent generatedCode={generatorCode} />

			<CodeDisplay displayMessage={'YOUR CODE'} secretCode={secretCode} />
		</Container>
  );
}
