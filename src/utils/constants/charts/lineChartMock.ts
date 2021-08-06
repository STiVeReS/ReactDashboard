export const LINE_CHART = {
    labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: '#5E72E4',
        borderWidth: 2,
        data: [0, 20, 10, 30, 15, 40, 20, 60],
        label: '',
    }],
};


export const LINE_CHART_OPTIONS = {
    plugins: {
        legend: {
            display: false,
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    },
    elements: {
        point: {
            radius: 0
        }
    }
};
