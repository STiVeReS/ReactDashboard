import React from 'react';
import {IPageProps} from "../../utils/interfaces/pages";
import {TopBarContainer} from "../../components/Navigation/TopBar/TopBarContainer";
import {Breadcrumbs} from "../../components/Navigation/Breadcrumbs";
import {TopBarPostsContainer} from "../../components/TopBarPosts/TopBarPostsContainer";


export function Alternative({label, url, subLabel, subUrl, isRaised}: IPageProps) {
    return (
        <>
            <div className={"top-bar"}>
                <TopBarContainer/>
                <Breadcrumbs label={label} url={url} subLabel={subLabel} subUrl={subUrl}/>
                <TopBarPostsContainer/>
            </div>
        </>
    )
}