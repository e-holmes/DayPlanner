import React from "react";
import listItem from "./listItem"
import "./style.css";


function InfoCard(prop) {
    return (
        <div className="card">
            <h2 className="card-title mt-4 text-center">{props.}</h2>
            <ul className="list card-text">
            </ul>
        </div>
    )
}

export default InfoCard;