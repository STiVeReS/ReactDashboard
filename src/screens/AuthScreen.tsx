import React from 'react';
import {Route, Redirect} from "react-router-dom";

/*
* helpers
* */
import {getFromLocalStorage} from "../utils/helpers/localstore/localstore";
import {HOME_URL, AUTH_URL} from "../utils/constants/url/url";

/*
* Components
* */
import {CreateAcc} from "../view/CreateAcc/CreateAcc";
import {Auth} from "../view/Auth/Auth";

export function AuthScreen() {
    return (
        <>
            {Object.keys(getFromLocalStorage('userToken')).length
                ? <Redirect from="/" to={"/dashboard/main"}/>
                : <Redirect from="/" to="/auth/sign-in"/>
            }
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