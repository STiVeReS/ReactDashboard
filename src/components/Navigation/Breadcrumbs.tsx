import React from 'react'
import {Link} from 'react-router-dom'


export interface ITopBarNav {
    label: string;
    url: string;
    subLabel?: string;
    subUrl?: string;
}

export function Breadcrumbs({label, url, subLabel, subUrl}: ITopBarNav) {
    const HOME_LINK = '/dashboard/main';
    return (
        <div className={"container-fluid"}>
            <div className={"row py-4"}>
                <div className={"col-12 col-md-6"}>
                    <div className={"page-nav"}>
                        <h5 className={"page-nav__label"}>{label}</h5>
                        <ul className={"page-nav__breadcrumbs"}>
                            <li className={"page-nav__icon"}>
                                <Link to={HOME_LINK}>
                                    <i className="bi bi-house-door"></i>
                                </Link>
                            </li>
                            <li className={""}>
                                <Link to={`/${url}/${subUrl}`}>
                                    {label}
                                </Link>
                            </li>
                            <li>{subLabel}</li>
                        </ul>
                    </div>
                </div>

                <div className={"col-12 col-md-6 align-self-center"}>
                    <div className={"page-btn"}>
                        <button className={"page-btn__item"}>New</button>
                        <button className={"page-btn__item"}>Filters</button>
                    </div>
                </div>

            </div>
        </div>
    )
}