import React from 'react';
import {SingleItem} from "./SingleItem";
import {statBlockData} from "../../api/stat_block/statBlockData";
// console.log(statBlockData)


export function StatBlock() {

    const renderItem = statBlockData.map((item, index) => {
        return (
            <SingleItem
                key={index}
                title={item.title}
                titleValue={item.titleValue}
                icon={item.icon}
                dynamicValue={item.dynamic}
                dynamicTitle={item.dynamicTitle}
            />
        )
    })

    return (
        <div className={'stat-block'}>
            {renderItem}
        </div>

    )
}