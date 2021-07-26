import React from 'react';
/*
* components
* */

import {StatBlock} from "../StatBlock/StatBlock";
import {TopBarSearch} from './TopBarSearch';
import {PageNav} from "../../pages/PageNav/PageNav";


export function TopBar() {
    return (
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

    )
}