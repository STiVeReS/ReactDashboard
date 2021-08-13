import React from 'react';

/*
* components
* */
import {LineChart} from "./LineChart";
import {BarChart} from "./BarChart";


export function ChartsContainer() {
    return (
        <div className={"container-fluid chart"}>
            <div className={"row"}>
                <LineChart/>
                <BarChart/>
            </div>
        </div>
    )
}