import React from 'react';
/*
* components
* */
import {Search} from './Layouts/Search';
import {UserAvavatar} from "./Layouts/UserAvavatar";

export function TopBarContainer() {
    return (
        <div className={"container-fluid user-bar pb-2"}>
            <div className={"row"}>
                <div className={"order-2 order-md-1 col-12 col-md-6"}>
                    <Search/>
                </div>
                <div className={"order-1 order-md-2 col-12 col-md-6"}>
                    <UserAvavatar/>
                </div>
            </div>
        </div>
    )
}