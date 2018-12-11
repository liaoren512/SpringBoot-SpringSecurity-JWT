var circleOption = {
    legend: {
        orient: 'vertical',
        x: 'left'
    },
    series: [
        {
            type:'pie',
            radius: ['50%', '90%'],
            hoverAnimation: false,
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    borderColor: 'rgba(56, 152, 200, 0.3)',
                    borderWidth: 2,
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 5,
                    opacity: .8
                },
                emphasis: {
                    show: true
                }
            },
            data:[]
        }
    ]
};