import React from "react";



function InfoCard(props) {
    return (
        <div className="card">
            <h2 className="card-title mt-4 text-center">{props.header}</h2>
            <div className="card-text">
                {props.body}
            </div>
        </div>
    )
}

export default InfoCard;