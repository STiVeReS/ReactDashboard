import React from 'react';
import {Route, Switch, useRouteMatch} from "react-router-dom";

/*
* Components
* */
import {CreateAcc} from "../pages/CreateAcc/CreateAcc";
import {Auth} from "../pages/Auth/Auth";


export function AuthScreen() {
    const {path} = useRouteMatch();
    return (
        <Switch>
            <Route
                exact
                path={`${path}/sign-in`}
                component={Auth}
            />
            <Route
                exact
                path={`${path}/create-account`}
                component={CreateAcc}
            />
        </Switch>
    )
}