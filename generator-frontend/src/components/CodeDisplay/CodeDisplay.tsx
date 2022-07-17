import React, { ReactElement } from "react";

type Secret = {
    displayMessage: string;
    secretCode?: string;
}

export default function CodeDisplay(props: Secret): ReactElement {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center mt-3 mb-3">
            <label className="control-label text-center small mb-2" htmlFor="payment-box">&#128308; LIVE</label>
            <div className="col-sm-2">
                <input id="payment-box" className="form-control text-center" type="text" value={`${props.displayMessage}: ${props.secretCode || ''}`} disabled readOnly />
            </div>
		</div>
    );
}