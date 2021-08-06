import React, {useState} from 'react';
import {Link} from 'react-router-dom'

/*
* api
* */
import {SIDE_MENU} from "../../../../utils/constants/nav/sideMenu";

/*
* Components
* */
import {MenuDropdown} from "./Drodown";

export function SingleItem() {
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
                return (
                    <ul className={`menu ${item.icon}`}
                        key={index}>
                        {dropDown
                            ? <li
                                onClick={() => handleDropdown(index)}
                                className={"menu__item"}>
                                {item.label}
                            </li>
                            : <li>
                                <Link to={`/${item.url}`}>{item.label}</Link>
                            </li>
                        }
                        {dropDown ?
                            <MenuDropdown
                                menu={menu}
                                itemId={index}
                                url={item.url}
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