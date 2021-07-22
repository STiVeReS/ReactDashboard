import React from 'react';
import {Line} from 'react-chartjs-2';

/*
* api
* */
import {LINE_CHART} from "../../api/charts/lineChart";

export function LineChart() {
    return (
        <div className={"col-12 col-lg-8 "}>
            <div className={"line-chart"}>
                <Line
                    data={LINE_CHART}
                    height={170}
                    options={{
                        legend: {
                            display: false
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                            }
                        },
                        elements: {
                            point:{
                                radius: 0
                            }
                        }
                    }}
                />
            </div>
        </div>
    )
}