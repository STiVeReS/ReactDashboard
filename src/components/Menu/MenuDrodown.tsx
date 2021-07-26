import React from 'react';
import {Link} from 'react-router-dom';
interface IProps {
    menu: {
        id: string | number,
        isOpened: boolean
    }
    itemId: number,
    labelUrl: string,
    items: {
        page: string,
        url: string,
    }[]
}

export function MenuDropdown({menu, itemId, labelUrl, items}: IProps) {
    const {id, isOpened} = menu;
    const renderDropDown = items.map((item, index) => {
        return (
            <li key={index}>
                <Link to={`/${labelUrl}/${item.url}`}>{item.page}</Link>
            </li>
        )
    })

    return (
        <ul className={itemId === id && isOpened ? 'opened' : 'closed'}>
            {renderDropDown}
        </ul>
    )
}