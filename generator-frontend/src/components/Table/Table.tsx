import React, { ReactElement } from "react";

import Table from 'react-bootstrap/Table';

type Code = {
    generatedCode?: string[][];
}

export default function TableComponent(props: Code): ReactElement {
    return (
        <Table bordered responsive size="sm">
            <tbody>
                {Array.from({ length: 10 }).map((_, rowIndex) => (
                    <tr key={rowIndex}>
                        {Array.from({ length: 10 }).map((_, colIndex) => (
                            <td key={colIndex} width="40px" height="40px">{props.generatedCode ? props.generatedCode[rowIndex][colIndex] : undefined}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}