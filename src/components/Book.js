import React from "react";

export default function Book(props) {
    
    return (
        <div className="book">
            <h2 className="title">{props.title}</h2>
            <h3 className="author">{props.author}</h3>
            <p className="desription">{props.desription}</p>
        </div>
    )
}