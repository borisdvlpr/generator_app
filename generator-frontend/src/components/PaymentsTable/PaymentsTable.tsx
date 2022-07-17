import React from "react";

import Table from 'react-bootstrap/Table';

interface PaymentsList {
    paymentsData: object;
}

export default function PaymentsTable(props: PaymentsList) {
    return (
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
                {Object.keys(props.paymentsData).map((payment, index) => {
                    return (
                        <tr key={index}>
                            <td>{payment?.name}</td>
                            <td>{payment?.amount}</td>
                            <td>{payment?.code}</td>
                            <td>{payment?.grid}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    );
}