import React from 'react';

/*
* components
* */

import {LineChart} from "./LineChart";
import {BarChart} from "./BarChart";


export function Charts() {
    return (
        <div className={"container chart"}>
            <div className={"row"}>
                <LineChart/>
                <BarChart/>
            </div>
        </div>
    )
}