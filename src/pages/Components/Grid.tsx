import React from 'react';
import {Link} from "react-router-dom";

interface IProps {
    label: string
    page?: string
    child?: string
}

export function Grid({label, page, child}: IProps) {
    return (
        <div className={"page"}>
           Grid
        </div>
    )
}