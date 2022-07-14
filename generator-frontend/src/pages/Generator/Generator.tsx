import React, { ReactElement } from "react";

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import CodeDisplay from "../../components/CodeDisplay/CodeDisplay";

export default function Generator(): ReactElement {
 	return (
		<Container>
			<div className="d-flex flex-wrap align-items-center justify-content-between mt-5 mb-5">
				<form className="col-12 col-lg-auto mb-lg-0 me-lg-3">
					<label className="control-label col-sm-3 small" htmlFor="char-search">Character</label>
          			<input type="text" id="char-search" className="form-control form-control-dark" placeholder="Character" aria-label="Search" />
        		</form>

				<button type="button" className="btn btn-primary">Generate 2D Grid</button>
			</div>
			
			<Table bordered responsive size="sm">
				<tbody>
					{Array.from({ length: 10 }).map((_, rowIndex) => (
						<tr>
							{Array.from({ length: 10 }).map((_, colIndex) => (
								<td key={colIndex} width="40px" height="40px">[{rowIndex}, {colIndex}]</td>
							))}
						</tr>
					))}
				</tbody>
			</Table>

			<CodeDisplay code="xx" />
		</Container>
  );
}
