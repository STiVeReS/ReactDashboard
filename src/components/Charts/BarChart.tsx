import React from 'react';
import {Bar} from 'react-chartjs-2';

/*
* api
* */
import {BAR_CHART} from "../../api/charts/barChart";


export function BarChart() {
    return (
        <div className={"col-12 col-lg-4"}>
            <div className={"bar-chart"}>
                <Bar
                    data={BAR_CHART}
                    height={350}
                    options={{
                        legend: {
                            display: false
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                            }
                        },
                    }}
                />
            </div>
        </div>
    )
}


/*
data={{
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
        barThickness: 15,
        label: '',
        data: [25, 20, 30, 22, 17, 29],
        backgroundColor: [
            'rgba(251,99,64, 1)',
            'rgba(251,99,64, 1)',
            'rgba(251,99,64, 1)',
            'rgba(251,99,64, 1)',
            'rgba(251,99,64, 1)',
            'rgba(251,99,64, 1)'
        ],
        borderRadius: 10,
        borderSkipped: false,
        bottom: 10,
        top: 100
    }],
}}
height={350}
options={{
    legend: {
        display: false
    },
    scales: {
        y: {
            beginAtZero: true,
        }
    },
}}
*/
