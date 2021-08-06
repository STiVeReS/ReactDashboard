import React from 'react';
import {Route, Redirect} from "react-router-dom";

/*
* Components
* */
import {CreateAcc} from "../view/CreateAcc/CreateAcc";
import {Auth} from "../view/Auth/Auth";

export function AuthScreen() {
    return (
        <>
            <Redirect from="/" to="/auth/sign-in"/>
            <Route
                exact
                path="/auth/sign-in"
                component={Auth}
            />
            <Route
                exact
                path="/create-account"
                component={CreateAcc}
            />
        </>
    )
}