import React from 'react';

/*
* Routing
* */

import {MenuRouting} from "../components/Menu/MenuRouting";
/*
* Components
* */

import {Sidebar} from "../components/Siderbar/Sidebar";

export function Main() {
    return (
        <div className={'wrapper'}>
            <Sidebar/>
            <main className={"content"}>
                <MenuRouting/>
            </main>
        </div>
    )
}