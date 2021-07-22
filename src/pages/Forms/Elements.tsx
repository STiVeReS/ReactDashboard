import React from 'react';
import {Link} from "react-router-dom";

interface IProps {
    label: string
    page?: string
    child?: string
}

export function Elements({label, page, child}: IProps) {
    return (
        <div className={"page"}>
            <h3>{label}</h3> <span>icon</span> <Link  to="./">{page}</Link><span>{child}</span>
        </div>
    )
}