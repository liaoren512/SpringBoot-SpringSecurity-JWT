var mapOption = {
    visualMap: {
        orient: 'horizontal',
        inverse: true,
        min: 0,
        max: 3300,
        left: 20,
        bottom: 20,
        calculable: true,
        color: ['rgba(193, 35, 43, 0.8)', 'rgba(252, 206, 16, 0.8)']
    },
    series: [
        {
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    borderColor: 'rgba(56, 152, 200, 0.3)',
                    borderWidth: 2,
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 20
                },
                emphasis: {
                    show: true
                }
            },
            data:[]
        }
    ]
};