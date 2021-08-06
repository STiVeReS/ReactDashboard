import React from 'react';


/*
* COMPONENTS
* */
import {PropsToSideBar} from "../../components/Navigation/PropsToSideBar";
import {Breadcrumbs} from "../../components/Navigation/Breadcrumbs";
import {ChartsContainer} from "../../components/Charts/ChartsContainer";
import {BlocksContainer} from "../../components/TopBarBlocks/BlocksContainer";
import {TopBarContainer} from "../../components/Navigation/TopBar/TopBarContainer";
import {IPageProps} from "../../utils/interfaces/pages";


export function Dashboard({label, url, subLabel, subUrl, isRaised, nav}: IPageProps) {
    return (
        <>
            {nav ? <PropsToSideBar navKey={nav}/> : ''}
            <main className={"content"}>
                <div className={"top-bar"}>
                    <TopBarContainer/>
                    <Breadcrumbs label={label} url={url} subLabel={subLabel} subUrl={subUrl}/>
                    <BlocksContainer/>
                </div>
                <div className={`page ${isRaised ? 'raised' : ''}`}>
                    <ChartsContainer/>
                </div>
            </main>
        </>
    )
}