import React from 'react';
import {Link} from 'react-router-dom';

interface IProps {
    menu: {
        id: string | number,
        isOpened: boolean
    }
    itemId: number,
    url: string,
    items: {
        label: string,
        url: string,
    }[]
}

export function MenuDropdown({menu, itemId, url, items}: IProps) {
    const {id, isOpened} = menu;
    const renderDropDown = items.map((item, index) => {
        return (
            <li key={index}>
                <Link to={`/${url}/${item.url}`}>{item.label}</Link>
            </li>
        )
    })

    return (
        <ul className={itemId === id && isOpened ? 'menu opened' : 'menu closed'}>
            {renderDropDown}
        </ul>
    )
}