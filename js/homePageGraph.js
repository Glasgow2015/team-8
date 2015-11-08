window.onload = function () {
$(function () {
    $('#chartContainer').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Number of People diagnosed by Pancreatic Cancer - 2013'
        },
        subtitle: {
            text: '(latest figures)'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: 0,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'No. of People'
            }
        },
        legend: {
            enabled: true
        },
        tooltip: {
            pointFormat: 'Population in 2013: <b>{point.y:.1f} </b>'
        },
        series: [{
            name: 'Age Group',
            data: [
                ['Under 5', 0],
                ['5-24', 0],
                ['25-29', 1],
                ['30-44', 2],
                ['45-49', 13],
                ['50-54', 37],
                ['55-59', 43],
                ['60-64', 79],
                ['65-69', 117],
                ['70-74', 135],
                ['75-79', 118],
                ['80-84', 108],
                ['85-89', 73],
                ['90+', 43],
                ['All Ages', 773]
            ],
            dataLabels: {
                enabled: true,
                rotation: 0,
                color: '#000000',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
});
};
  