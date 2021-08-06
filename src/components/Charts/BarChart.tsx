import React from 'react';
import {Bar} from 'react-chartjs-2';

/*
* api
* */
import {BAR_CHART, BAR_CHART_OPTIONS} from "../../utils/constants/charts/barChartMock";


export function BarChart() {
    return (
        <div className={"col-12 col-lg-4"}>
            <div className={"bar-chart"}>
                <Bar
                    data={BAR_CHART}
                    options={BAR_CHART_OPTIONS}
                    height={350}
                />
            </div>
        </div>
    )
};