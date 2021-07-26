import React from 'react';
import {Route, Redirect} from "react-router-dom";

/*
* Components
* */
import {AuthPage} from "../pages/Auth/AuthPage";

export function AuthScreen() {
    return (
        <>
            <Redirect from="/" to="/auth/sign-in"/>
            <Route
                exact
                path="/auth/sign-in"
                component={AuthPage}
            />
        </>
    )
}