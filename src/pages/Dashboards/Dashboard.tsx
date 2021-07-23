import React from 'react';


/*
* COMPONENTS
* */
import {Charts} from "../../components/Charts/Charts";

interface IProps {
    label: string
    page?: string
    child?: string
}

export function Dashboard({label, page, child}: IProps) {
    return (
        <div className={"page"}>

            <Charts/>
        </div>
    )
}
