import React from 'react';
/*
* components
* */
import {TopBarSearch} from './TopBarSearch';

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