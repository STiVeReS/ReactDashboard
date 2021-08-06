import React from 'react'

/*
* interface
* */
export interface IFormHeader {
    header?: string;
    text?: string;
}

export function FormHeader({header, text}: IFormHeader) {
    return (
        <div className={"col-12 col-md-5 px-5"}>
            <div className={"card border-0 bg-transparent"}>
                <h4 className={"mb-3"}>{header}</h4>
                <p className={"card-text fw-light"}>{text}</p>
            </div>
        </div>
    )
}