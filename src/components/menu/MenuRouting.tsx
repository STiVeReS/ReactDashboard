import React from 'react';
import {Switch, Route} from 'react-router-dom'

/*
* api
* */
import {menu} from "../../api/side_bar/menu";
import {Widgets} from "../../pages/widgets/Widgets";
import {Calendar} from "../../pages/calendar/Calendar";
import {Charts} from "../../pages/charts/Charts";

/*
* pages
* */

const test = [
    {
        label: 'Widgets',
        labelUrl: 'widgets',
        component: Widgets,
        children: []
    },
    {
        label: 'Charts',
        labelUrl: 'charts',
        component: Charts,
        children: []
    },
    {
        label: 'Calendar',
        labelUrl: 'calendar',
        component: Calendar,
        children: []
    }
]


export function MenuRouting() {
    const renderRoutes = menu.map((item, index) => {
        return item.children.map((sub, subIndex) => {
            return (
                <Route
                    key={item.labelUrl ? index : subIndex}
                    exact
                    path={item.labelUrl ? `/${item.labelUrl}` : `/${item.labelUrl}/${sub.url}`}
                    component={item.labelUrl ? item.component : sub.component}
                />
            )
        })
    });

    console.log(renderRoutes)

    return (
        <Switch>
            {renderRoutes}
        </Switch>
    )
}