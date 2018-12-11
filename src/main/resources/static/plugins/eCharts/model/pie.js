var pieOption = {
    legend: {
        orient: 'vertical',
        x: 'left'
    },
    series: [
        {
            type:'pie',
            radius: [0, '60%'],
            hoverAnimation: false,
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'outside',
                    textStyle: {    
                        fontSize: '12',
                        color: '#ffffff'
                    }
                },
                emphasis: {
                    show: true
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 10,
                    length2: 5
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