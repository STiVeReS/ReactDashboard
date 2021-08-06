import React from 'react';
import {IPageProps} from "../../utils/interfaces/pages";


export function Alternative({label, url, isRaised, nav}: IPageProps) {
    return (
        <div className={"page"}>
            {url} {label} {url}
        </div>
    )
}