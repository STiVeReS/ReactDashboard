import React from 'react';


/*
* COMPONENTS
* */
import {PageNav} from "../PageNav/PageNav";
import {Charts} from "../../components/Charts/Charts";
import {StatBlock} from "../../components/StatBlock/StatBlock";
import {TopBar} from "../../components/TopBar/TopBar";
import {Navigation} from "../../components/Navigation/Navigation";

interface IProps {
    label: string
    page?: string
    isRaised?: boolean
}

export function PageContent({label, page, isRaised}: IProps) {
    return (
        <>
            <Navigation/>
            <main className={"content"}>
                <div className={"top-bar"}>
                    <TopBar/>
                    <PageNav label={label} page={page}/>
                    <StatBlock/>
                </div>
                <div className={`page ${isRaised ? 'raised' : ''}`}>
                    <Charts/>
                </div>
            </main>
        </>
    )
}
