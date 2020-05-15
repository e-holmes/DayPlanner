import React from "react";

function Button(props) {
    return (
        <div className="align-content-center">
            <button type="button" className="btn btn-success btn-outline-light" onClick={props.click} data-toggle={prop.dataToggle} data-target={prop.dataTargetID}>{prop.title}</button>
        </div>
    )
}

export default Button;