import React from 'react';
import {Link} from 'react-router-dom';


interface IProps {
    currentId: number,
    itemId: number,
    labelUrl: string,
    items: {
        page: string,
        url: string,
    }[]
}

export function MenuDropdown({currentId, itemId, labelUrl, items}: IProps) {
    const renderDropDown = items.map((item, index) => {
        return (
            <li key={index}>
                <Link to={`/${labelUrl}/${item.url}`}>{item.page}</Link>
            </li>
        )
    })

    return (
        <ul className={currentId === itemId ? 'opened' : 'closed'}>
            {renderDropDown}
        </ul>
    )
}