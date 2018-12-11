var barOption = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        show : false
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'category',
        axisLine : {
            show : true,
            lineStyle : {
                color : '#ffffff'
            }
        },
        axisTick : {show: false},
        axisLabel : {
            show: true,
            textStyle: {
                color : '#ffffff'
            }
        },
        splitLine : {
            show: false
        },
        data : ['资金管理', '预算管理', '会计核算与报告']
    },
    yAxis: [{show: false}],
    series: [
        {
            name: '个数',
            type: 'bar',
            stack: '个数',
            barGap: '50%',
            barMaxWidth : 40,
            label: {
                normal: {
                    show: true,
                    position: 'insideTop'
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
            data: [17212, 3021, 2410]
        }
    ]
};