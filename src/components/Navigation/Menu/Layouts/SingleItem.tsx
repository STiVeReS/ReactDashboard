import React, {useState} from 'react';
import {Link, useRouteMatch} from 'react-router-dom'

/*
* api
* */
import {SIDE_MENU} from "../../../../utils/constants/nav/sideMenu";

/*
* Components
* */
import {MenuDropdown} from "./Drodown";


export function SingleItem() {
    const {path} = useRouteMatch();
    const [menu, setMenu] = useState({
        id: -1,
        isOpened: false
    });
    const handleDropdown = (id: number) => {
        setMenu(prevState => ({
                id: id,
                isOpened: !prevState.isOpened
            })
        )
    }


    if (SIDE_MENU.length) {
        const renderMenu = SIDE_MENU.map((item, index) => {
                const dropDown = item.children && item.children.length
                    ? item.children
                    : '';
                return dropDown ?
                    <li onClick={() => handleDropdown(index)}
                        className={"menu__item with-dropdown"}
                        key={index}
                    >
                        <i className={`menu__item-icon ${item.icon}`}></i>
                        {item.label}
                        <i className="menu__item-icon--dropdown bi bi-chevron-down"></i>

                        <MenuDropdown
                            menu={menu}
                            itemId={index}
                            url={`${path}/${item.url}`}
                            items={dropDown}
                        />
                    </li>
                    : <li className={"menu__item"} key={index}>
                        <i className={`menu__item-icon ${item.icon}`}></i>
                        <Link to={`${path}/${item.url}`}>{item.label}</Link>
                    </li>
            }
        );

        return (
            <nav>
                <ul className={"menu"}>
                    {renderMenu}
                </ul>
            </nav>
        )
    }
    return (
        <nav>
            no menu
        </nav>
    )
}