import React from "react";

function Translation({ dostuff, setInput, result }) {
    return (
        <div className="translation">
            <textarea className="text-area" cols={80} rows={10} onChange={(e) => setInput(e.target.value)}></textarea>
            <br></br>
            <button className="action-btn" onClick={dostuff}>SOLVE QUERY</button>
            <h3 className="result-text">{result.length >0 ? result : "" } </h3>
        </div>
    )
}

export default Translation;