import React from 'react';
/*
* interface
* */

interface IFormContainer {
    children: React.ReactNode;
}

export function FormContainer(props : IFormContainer) {
    return (
        <div className={"login"}>
            <div className={"container"}>
                <div className={"row justify-content-center"}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}