import React from 'react';
import {IPageProps} from "../../utils/interfaces/pages";

export function Calendar({label, url, isRaised, nav}: IPageProps) {
    return (
        <div className={"page"}>
            {label}
            Example
        </div>
    )
}