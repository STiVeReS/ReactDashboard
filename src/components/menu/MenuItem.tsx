import React from 'react';
import {Link} from 'react-router-dom'

/*
* api
* */
import {menu} from "../../api/side_bar/menu";


/*
* components
* */

import {MenuDropdown} from "./MenuDrodown";

export function MenuItem() {
    if (menu.length) {
        const renderMenu = menu.map((item, index) => {
            const dropDown = item.children.length && item.children ? item.children : '';
            return (
                <ul  className={"menu"}
                    key={index}>
                    {dropDown
                        ? <li className={"menu__item"} >{item.label}</li>
                        : <li>
                            <Link to={`/${item.labelUrl}`}>{item.label}</Link>
                        </li>
                    }
                    {dropDown ? <MenuDropdown labelUrl={item.labelUrl} items={dropDown}/> : ''}
                </ul>
            )
        });
        return (
            <nav>
                {renderMenu}
            </nav>
        )
    }
    return (
        <nav>
            no menu
        </nav>
    )
}