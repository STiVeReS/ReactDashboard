import React from 'react';
import {Link} from 'react-router-dom';

interface IProps {
    labelUrl: string,
    items: {
        page: string,
        url: string,
    }[]
}


export function MenuDropdown({labelUrl, items}: IProps) {
    const renderDropdown = items.map((item, index) => {
        return (
            <li key={index}>
                <Link to={`/${labelUrl}/${item.url}`}>{item.page}</Link>
            </li>
        )
    })

    return (
        <ul className={"menu-dropdown"}>
            {renderDropdown}
        </ul>
    )
}