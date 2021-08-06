import React from 'react';
/*
* components
* */
import {Search} from './Layouts/Search';
import {UserAvavatar} from "./Layouts/UserAvavatar";

export function TopBarContainer() {
    return (
        <div className={"container user-bar pb-2"}>
            <div className={"row"}>
                <div className={"col-12 col-md-6"}>
                    <Search/>
                </div>
                <div className={"col-12 col-md-6"}>
                    <UserAvavatar/>
                </div>
            </div>
        </div>
    )
}