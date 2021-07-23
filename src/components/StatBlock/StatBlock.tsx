import React from 'react';
import {SingleItem} from "./SingleItem";
import {STAT_BLOCK_DATA} from "../../api/statBlock/statBlockData";


export function StatBlock() {

    const renderBlocks = STAT_BLOCK_DATA.map((item, index) => {
        return (
            <SingleItem
                key={index}
                label={item.label}
                labelValue={item.labelValue}
                icon={item.icon}
                dynamicValue={item.dynamic}
                dynamicTitle={item.dynamicTitle}
            />
        )
    });

    return (
        <div className={"container stat"}>
            <div className={"row"}>
                {renderBlocks}
            </div>
        </div>

    )
}