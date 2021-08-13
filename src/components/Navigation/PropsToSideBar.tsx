import React from 'react';
import {NAV_COMPONENTS} from "../../utils/constants/nav/sideMenu";


export interface ISideBar {
    navKey: string;
}

export function PropsToSideBar({navKey}: ISideBar): JSX.Element {
    // const getNav: { [key: string]: () => JSX.Element } = NAV_COMPONENTS;
    return (
        <>
            <div>111</div>
        </>
    )
}


