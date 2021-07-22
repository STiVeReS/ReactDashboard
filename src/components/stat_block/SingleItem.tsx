import React from 'react';

interface IStatBlock {
    title: string,
    titleValue: number | string,
    icon: string,
    dynamicValue: number | string,
    dynamicTitle: string
}

export function SingleItem({title, titleValue, icon, dynamicValue, dynamicTitle}: IStatBlock) {
    return (
        <div className={"stat-block__item"}>

        </div>
    )
}
