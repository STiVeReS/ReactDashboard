import React from 'react';
import {SideNavRouting} from "../routes/SideNavRouting";
import {SideMenuContainer} from "../components/Navigation/Menu/SideMenuContainer";


export function MainScreen() {
    return (
        <>
            <div className={'wrapper'}>
                <SideMenuContainer/>
                <main className={"content"}>
                    <SideNavRouting/>
                </main>
            </div>
        </>
    )
}