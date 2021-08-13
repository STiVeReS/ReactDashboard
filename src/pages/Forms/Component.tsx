import React from 'react';
import {IPageProps} from "../../utils/interfaces/pages";

export function Component({label, url, isRaised}: IPageProps) {
    return (
        <div className={"page"}>
            <h2>{label}</h2>
        </div>
    )
}