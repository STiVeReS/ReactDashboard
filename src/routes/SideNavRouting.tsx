import React from 'react';
import {Switch, Route, useRouteMatch} from 'react-router-dom'

/*
* constants
* */
import {SIDE_MENU} from "../utils/constants/nav/sideMenu";

export function SideNavRouting(): JSX.Element {
    const {path} = useRouteMatch();
    const renderRoutes = SIDE_MENU.map((item, index) => {
        return !(item.children && item.children.length) ?
            <Route
                // exact
                key={index}
                path={`${path}/${item.url}`}
                component={() => item.component
                    ? item.component({
                            label: item.label,
                            url: `${path}/${item.url}`,
                            // nav: item.nav ? item.nav : '',
                            isRaised: !!item.isRaised
                        }
                    ) : null
                }
            /> : item.children.map((sub, subIndex) => {
                    return (
                        <Route
                            // exact
                            key={subIndex}
                            path={`${path}/${item.url}/${sub.url}`}
                            component={() => sub.component ?
                                sub.component({
                                    label: item.label,
                                    url: `${path}/${item.url}`,
                                    subLabel: sub.label,
                                    subUrl: `${path}/${sub.url}`,
                                    isRaised: !!sub.isRaised,
                                    // nav: sub.nav ? sub.nav : ''
                                }) : null
                            }
                        />
                    )
                }
            );
    });

    return (
        <Switch>
            {renderRoutes}
        </Switch>
    )
}