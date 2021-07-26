import React from 'react';
import {Route} from "react-router-dom";


import {AuthPage} from "../pages/Auth/AuthPage";

export function Auth() {
    return (
        <Route
            exact
            path="/"
            component={AuthPage}
        />
    )
}