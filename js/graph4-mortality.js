

  

$(function () {
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Number of People who have died because of Prancreatic Cancer - 2013'
        },
        subtitle: {
            text: 'text'
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
                text: 'Number of people'
            }
        },
        legend: {
            enabled: true
        },
        tooltip: {
            pointFormat: 'Population in 2013: <b>{point.y:.1f} </b>'
        },
        series: [{
            name: 'Age group',
            data: [
                ['Under 5', 0],
                ['5-24', 0],
                ['25-29', 1],
                ['30-34', 0],
				['35-39', 1],
				['40-44', 5],
                ['45-49', 15],
                ['50-54', 26],
                ['55-59', 44],
                ['60-64', 80],
                ['65-69', 110],
                ['70-74', 114],
                ['75-79', 122],
                ['80-84', 103],
                ['85-89', 67],
                ['90+', 54],
                ['All', 742]
            ],
            dataLabels: {
                enabled: true,
                rotation: 0,
                color: '#FFFFFF',
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
  

        