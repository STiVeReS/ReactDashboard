import React from 'react';
/*
* SideNavRouting
* */
import {SideNavRouting} from "../routes/SideNavRouting";

/*
* Components
* */

export function MainScreen() {
    return (
        <div className={'wrapper'}>
            <SideNavRouting/>
        </div>
    )
}