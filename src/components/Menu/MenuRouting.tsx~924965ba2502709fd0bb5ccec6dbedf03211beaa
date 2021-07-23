import React from 'react';
import {Switch, Route} from 'react-router-dom'

/*
* api
* */
import {menu} from "../../api/side_bar/menu";

export function MenuRouting() {
    const renderRoutes = menu.map((item, index) => {
        return !item.children.length ?
            <Route
                key={index}
                exact
                path={`/${item.labelUrl}`}
                component={item.component}
            /> : item.children.map((sub, subIndex) => {
            return (
                <Route
                    key={subIndex}
                    exact
                    path={`/${item.labelUrl}/${sub.url}`}
                    component={sub.component}
                />
            )
        })
    });

    return (
        <Switch>
            {renderRoutes}
        </Switch>
    )
}
