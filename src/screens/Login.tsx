import React, {useState} from 'react';
import {Route} from "react-router-dom";

/*
* PageComponents
* */
import {PageLogin} from "../pages/PageLogin/PageLogin";

export function Login() {
    return (
        <Route
            exact
            path="/"
            component={PageLogin}
        />
    )
}