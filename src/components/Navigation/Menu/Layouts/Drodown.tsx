import React from 'react';
import {Link} from 'react-router-dom';

interface IMenuProps {
    id: string | number,
    isOpened: boolean
}


interface IBaseProps {
    menu: IMenuProps
    itemId: number,
    url: string,
    items: {
        label: string,
        url: string,
    }[]
}

export function MenuDropdown({menu, itemId, url, items}: IBaseProps) {
    let {id, isOpened} = menu;
    const renderDropDown = items.map((item, index) => {
        return (
            <li className={"menu__sub-item"} key={index}>
                <Link to={`${url}/${item.url}`}>{item.label}</Link>
            </li>
        )
    });

    return (
        <ul className={`menu__sub ${id === itemId && isOpened ? 'opened' : 'closed'}`}>
            {renderDropDown}
        </ul>
    )
}