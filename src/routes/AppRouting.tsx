import React from 'react';

/*
* components
* */
import {AuthScreen} from "../screens/AuthScreen";
import {MainScreen} from "../screens/MainScreen";
import {Redirect, Route, Switch} from "react-router-dom";
import {LocalStore} from "../api/services/localstore/localstore";

export function AppRouting() {
    const localStore = new LocalStore();
    return (
        <Switch>
            {localStore.getFromLocalStorage('userToken')
                ? <>
                    <Redirect to={"/main/dashboard/main"}/>
                    <Route path={"/main"} component={MainScreen}/>
                </>

                : <>
                    <Redirect to={"/auth/sign-in"}/>
                    <Route path={"/auth"} component={AuthScreen}/>
                </>
            }
        </Switch>
    )
}