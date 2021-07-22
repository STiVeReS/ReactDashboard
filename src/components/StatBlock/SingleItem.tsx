import React from 'react';
import {STAT_BLOCK_DATA} from "../../api/statBlock/statBlockData";

interface IStatBlock {
    label: string,
    labelValue: number | string,
    icon: string,
    dynamicValue: number | string,
    dynamicTitle: string
}


export function SingleItem({label, labelValue, icon, dynamicValue, dynamicTitle}: IStatBlock) {
    return (
        <div className={"col-3"}>
            <div className={'stat-block'}>
                <div className={"stat-block__text"}>
                    <h6 className={"stat-block__title"}>{label}</h6>
                    <h6>{labelValue.toLocaleString()}</h6>

                </div>
                <p className={"stat-block__bottom"}>
                    <span className={"stat-block__dynamic-val"}>{`${dynamicValue}%`}</span>
                    <span>{dynamicTitle}</span>
                </p>
            </div>
        </div>
    )
}
