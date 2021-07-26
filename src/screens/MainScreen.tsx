import React from 'react';
/*
* Routing
* */
import {MenuRouting} from "../components/Menu/MenuRouting";

/*
* Components
* */

export function MainScreen() {
    return (
        <div className={'wrapper'}>
            <MenuRouting/>
        </div>
    )
}