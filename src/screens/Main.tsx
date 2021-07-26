import React from 'react';
import {BrowserRouter} from "react-router-dom";

/*
* Routing
* */
import {MenuRouting} from "../components/Menu/MenuRouting";
import {Auth} from "./Auth";
/*
* Components
* */
import {Sidebar} from "../components/Siderbar/Sidebar";
import {TopBar} from '../components/TopBar/TopBar';

export function Main() {
    return (
        <div className={'wrapper'}>
            <Sidebar/>
            <div className={"content"}>
                <MenuRouting/>
            </div>
        </div>
    )
}