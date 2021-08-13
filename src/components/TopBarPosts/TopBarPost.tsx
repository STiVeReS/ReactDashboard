import React from 'react';
import {ITopBarPosts} from "../../utils/interfaces/topBarPosts";


export function TopBarPost({label, value, subValue, subLabel, icon}: ITopBarPosts) {
    return (
        <div className={"col-12 col-md-6 col-lg-6 col-xl-3"}>
            <div className={'stat-block'}>

                <div className={"stat-block__top"}>
                    <div className={`stat-block__label`}>
                        <h6 className={"stat-block__title"}>{label}</h6>
                        <h6>{value.toLocaleString()}</h6>
                    </div>
                    <div className={`stat-block__icon ${icon}`}></div>
                </div>
                <p className={"stat-block__bottom"}>
                    <span className={"stat-block__dynamic-val"}>{`${subValue}%`}</span>
                    <span>{subLabel}</span>
                </p>
            </div>
        </div>
    )
}