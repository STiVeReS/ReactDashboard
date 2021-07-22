import React, {useState} from 'react';
import {Link} from 'react-router-dom'

/*
* api
* */
import {MENU_LIST} from "../../api/sideBar/menu";


/*
* Components
* */

import {MenuDropdown} from "./MenuDrodown";

export function MenuItem() {
    const [id, setId] = useState(-1);
    const handleDropdown = (id: number) => setId(() => id);


    if (MENU_LIST.length) {
        const renderMenu = MENU_LIST.map((item, index) => {
                const dropDown = item.children.length && item.children
                    ? item.children
                    : '';
                return (
                    <ul className={"menu"}
                        key={index}>
                        {dropDown
                            ? <li
                                onClick={() => handleDropdown(index)}
                                className={"menu__item"}>{
                                item.label}
                            </li>
                            : <li>
                                <Link to={`/${item.labelUrl}`}>{item.label}</Link>
                            </li>
                        }
                        {dropDown ?
                            <MenuDropdown
                                currentId={id}
                                itemId={index}
                                labelUrl={item.labelUrl}
                                items={dropDown}/>
                            : ''
                        }
                    </ul>
                )
            }
        );

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