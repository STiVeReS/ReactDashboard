import React from 'react';
import {BrowserRouter} from "react-router-dom";

/*
* Components
* */
import {Sidebar} from "../components/Sidebar";
import {MenuRouting} from "../components/Menu/MenuRouting";

export function Main(props: any) {
    return (
        <div className={'container-fluid'}>
            <div className={"row"}>
                <div className={"col-3"}>
                    <Sidebar/>
                </div>
                <div className={" col-9 wrap__main"}>
                    <MenuRouting/>
                </div>
            </div>
        </div>
    )
}