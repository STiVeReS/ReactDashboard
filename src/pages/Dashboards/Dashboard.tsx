import React from 'react';


/*
* COMPONENTS
* */
import {PageNav} from "../PageNav/PageNav";
import {Charts} from "../../components/Charts/Charts";
import {StatBlock} from "../../components/StatBlock/StatBlock";
import {TopBar} from "../../components/TopBar/TopBar";


interface IProps {
    label: string
    page?: string
    isRaised?: boolean
}

export function Dashboard({label, page, isRaised}: IProps) {
    console.log(isRaised)
    return (
        <>
            <div className={"top-bar"}>
                <TopBar/>
                <PageNav label={label} page={page}/>
                <StatBlock/>
            </div>
            <div className={`page ${isRaised ? 'raised' : ''}`}>
                <Charts/>
            </div>
        </>
    )
}
