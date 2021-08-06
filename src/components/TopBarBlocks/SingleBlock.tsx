import React from 'react';

export interface ITopBarBlock {
    label: string;
    value: number | string;
    subValue: number | string;
    subLabel: string;
    icon: string;
}

export function SingleBlock({label, value, subValue, subLabel, icon}: ITopBarBlock) {
    return (
        <div className={"col-12 col-md-6 col-lg-3"}>
            <div className={'stat-block'}>
                <div className={`stat-block__label ${icon}`}>
                    <h6 className={"stat-block__title"}>{label}</h6>
                    <h6>{value.toLocaleString()}</h6>
                </div>
                <p className={"stat-block__bottom"}>
                    <span className={"stat-block__dynamic-val"}>{`${subValue}%`}</span>
                    <span>{subLabel}</span>
                </p>
            </div>
        </div>
    )
}