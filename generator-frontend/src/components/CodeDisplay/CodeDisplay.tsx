import React from "react";

interface Code {
    code?: string;
}

export default function CodeDisplay({code =" N/A"}: Code) {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center  mt-3">
            <label className="control-label text-center small mb-2" htmlFor="code-box">&#128308; LIVE</label>
            <div className="col-sm-2">
                <input id="code-box" className="form-control text-center" type="text" value={`YOUR CODE: ${code}`} disabled readOnly />
            </div>
		</div>
    );
}