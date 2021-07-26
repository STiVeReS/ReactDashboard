import React from 'react';
import {Link} from "react-router-dom";

interface IProps {
    label: string
    page?: string
    child?: string
}

export function PagePricing({label, page, child}: IProps) {
    return (
        <div className={"page"}>label
            Pricing
        </div>
    )
}