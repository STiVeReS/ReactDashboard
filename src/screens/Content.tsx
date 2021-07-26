import React from 'react';
/*
* Routing
* */
import {MenuRouting} from "../components/Menu/MenuRouting";

/*
* PageComponents
* */

export function Content() {
    return (
        <div className={'wrapper'}>
            <MenuRouting/>
        </div>
    )
}