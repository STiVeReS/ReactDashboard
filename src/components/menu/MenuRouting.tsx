import React from 'react';
import {Switch, Route} from 'react-router-dom'

/*
* api
* */
import {MENU_LIST} from "../../api/sideBar/menu";



export function MenuRouting() {
    const renderRoutes = MENU_LIST.map((item, index) => {
        return !item.children.length ?
            <Route
                exact
                key={index}
                path={`/${item.labelUrl}`}
                component={item.component}
            /> : item.children.map((sub, subIndex) => {
                return (
                    <Route
                        exact
                        key={subIndex}
                        path={`/${item.labelUrl}/${sub.url}`}
                        component={
                            () => sub.component({
                                label: item.label,
                                page: sub.page,
                                isRaised: item.isRaised ? item.isRaised : sub.isRaised
                            })
                        }
                    />
                )
            })
    })

    return (
        <Switch>
            {renderRoutes}
        </Switch>
    )
}