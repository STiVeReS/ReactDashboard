import React from 'react';
import {BrowserRouter} from "react-router-dom";


/*
* Routing
* */
import {MenuRouting} from "../components/Menu/MenuRouting";
/*
* Components
* */
import {Sidebar} from "../components/Sidebar";
import {TopBar} from '../components/TopBar/TopBar';

export function Main(props: any) {
    return (
        <div className={'container-fluid'}>
            <div className={"row"}>
                <div className={"col-3"}>
                    <Sidebar/>
                </div>
                <div className={" col-9 wrap__main"}>
                    <TopBar/>
                    <MenuRouting/>
                </div>
            </div>
        </div>
    )
}