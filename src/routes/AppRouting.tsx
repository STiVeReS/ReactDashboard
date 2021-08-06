import React from 'react';

/*
* components
* */
import {AuthScreen} from "../screens/AuthScreen";
import {MainScreen} from "../screens/MainScreen";


export function AppRouting() {
    return (
        <>
            <AuthScreen/>
            <MainScreen/>
        </>
    )
}




