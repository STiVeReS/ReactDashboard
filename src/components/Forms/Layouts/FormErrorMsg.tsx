import React from "react";

interface IProps {
    msg: string
}

export const FormErrorMsg = ({msg}: IProps) => (
    <div className={"log-form__err text-justify"}>
        <h6>Something went wrong.</h6>
        <p>{msg}</p>
        <p>thank you!</p>
    </div>
)