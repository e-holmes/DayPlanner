import React from "react";


function Form(props) {
    return (
        <div>
            <label htmlFor={props.idName}></label>
            <input type={props.type} name={props.name} onChange={props.onChange} placeholder={props.placeholder} 
            className="form-control" id={props.idName} value={props.value} />
        </div>
    )
}

export default Form;