import React from 'react';
import {Switch, Route} from 'react-router-dom'

/*
* constants
* */
import {SIDE_MENU} from "../utils/constants/nav/sideMenu";

export function SideNavRouting() {
    const renderRoutes = SIDE_MENU.map((item, index) => {

        // return !(item.children && item.children.length) ?
        return !(item.children) ?
            <Route
                exact
                key={index}
                path={`/${item.url}`}
                component={() => item.component
                    ? item.component({
                            label: item.label,
                            url: item.url,
                            nav: item.nav ? item.nav : '',
                            isRaised: !!item.isRaised
                        }
                    ) : null
                }
            /> : item.children.map((sub, subIndex) => {
                return (
                    <Route
                        exact
                        key={subIndex}
                        path={`/${item.url}/${sub.url}`}
                        component={() => sub.component ?
                            sub.component({
                                label: item.label,
                                url: item.url,
                                subLabel: sub.label,
                                subUrl: sub.url,
                                isRaised: !!sub.isRaised,
                                nav: sub.nav ? sub.nav : ''
                            }) : null
                        }
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