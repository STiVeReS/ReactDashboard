import React from 'react';
/*
* components
* */


import {StatBlock} from "../StatBlock/StatBlock";
import {TopBarSearch} from '../TopBar/TopBarSearch';

export function TopBar() {
    return (
        <div className={"top-bar"}>
            <div className={"container login pb-2"}>
                <div className={"row"}>
                    <div className={"col-12 col-md-6"}>
                        <TopBarSearch/>
                    </div>
                    <div className={"col-12 col-md-6"}>
                        Login
                    </div>
                </div>
            </div>
            <StatBlock/>
        </div>
    )
}