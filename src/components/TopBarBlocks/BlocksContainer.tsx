import React from 'react';
import {SingleBlock} from "./SingleBlock";
import {STAT_BLOCK_DATA} from "../../utils/constants/topBarBlocks/topBarBlocks";


export function BlocksContainer() {

    const renderBlocks = STAT_BLOCK_DATA.map((item, index) => {
        return (
            <SingleBlock
                key={index}
                label={item.label}
                value={item.value}
                subValue={item.subValue}
                subLabel={item.subLabel}
                icon={item.icon}
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