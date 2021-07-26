import React from 'react';


/*
* COMPONENTS
* */
import {PageNavigation} from "../../components/Navigation/PageNavigation";
import {Charts} from "../../components/Charts/Charts";
import {StatBlock} from "../../components/StatBlock/StatBlock";
import {TopBar} from "../../components/TopBar/TopBar";
import {Navigation} from "../../components/Navigation/Navigation";

interface IProps {
    label: string
    page?: string
    isRaised?: boolean
}

export function DashboardPage({label, page, isRaised}: IProps) {
    return (
        <>
            <Navigation/>
            <main className={"content"}>
                <div className={"top-bar"}>
                    <TopBar/>
                    <PageNavigation label={label} page={page}/>
                    <StatBlock/>
                </div>
                <div className={`page ${isRaised ? 'raised' : ''}`}>
                    <Charts/>
                </div>
            </main>
        </>
    )
}
