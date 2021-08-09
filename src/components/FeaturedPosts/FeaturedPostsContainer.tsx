import React from 'react';
import api from "../../api";

/*
* component
* */
import {SinglePost} from "./SinglePost";
import {STAT_BLOCK_DATA} from "../../utils/constants/topBarBlocks/topBarBlocks";


export function FeaturedPostsContainer() {

    const renderBlocks = STAT_BLOCK_DATA.map((item, index) => {
        return (
            <SinglePost
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