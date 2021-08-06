import React from 'react';
import {IPageProps} from "../../utils/interfaces/pages";


export function Sortable({label, url, isRaised, nav}: IPageProps) {
    return (
        <div className={"page"}>
            {label}
        </div>
    )
}