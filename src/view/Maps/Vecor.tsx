import React from 'react';
import {IPageProps} from "../../utils/interfaces/pages";


export function Vector({label, url, isRaised, nav}: IPageProps) {
    return (
        <div className={"page"}>
            <h3>{label}</h3>
        </div>
    )
}