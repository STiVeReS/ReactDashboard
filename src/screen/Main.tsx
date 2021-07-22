import React from 'react';
import {BrowserRouter} from "react-router-dom";

/*
* components
* */
import {Sidebar} from "../components/Sidebar";
import {MenuRouting} from "../components/menu/MenuRouting";

export function Main(props : any) {
    return (
        <div className={'wrap'}>
            <div className={"wrap__side"}>
                <Sidebar/>
            </div>
            <div className={"wrap__main"}>
                <MenuRouting/>
            </div>
        </div>
    )
}