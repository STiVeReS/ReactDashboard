import React from 'react';
import {Line} from 'react-chartjs-2';

/*
* api
* */
import {LINE_CHART, LINE_CHART_OPTIONS} from "../../utils/constants/charts/lineChartMock";

export function LineChart() {
    return (
        <div className={"col-12 col-lg-8 "}>
            <div className={"line-chart"}>
                <Line
                    data={LINE_CHART}
                    options={LINE_CHART_OPTIONS}
                    height={170}
                />
            </div>
        </div>
    )
}