import React from 'react';


/*
* COMPONENTS
* */
import {Breadcrumbs} from "../../components/Navigation/Breadcrumbs";
import {ChartsContainer} from "../../components/Charts/ChartsContainer";
import {TopBarPostsContainer} from "../../components/TopBarPosts/TopBarPostsContainer";
import {TopBarContainer} from "../../components/Navigation/TopBar/TopBarContainer";
import {IPageProps} from "../../utils/interfaces/pages";


export function Dashboard({label, url, subLabel, subUrl, isRaised}: IPageProps) {
    return (
        <>
            <div className={"top-bar"}>
                <TopBarContainer/>
                <Breadcrumbs label={label} url={url} subLabel={subLabel} subUrl={subUrl}/>
                <TopBarPostsContainer/>
            </div>
            <div className={`page ${isRaised ? 'raised' : ''}`}>
                <ChartsContainer/>
            </div>
        </>
    )
}