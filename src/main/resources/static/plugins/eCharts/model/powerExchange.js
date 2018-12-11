
var powerExchangeOption = {
		grid : {
			width : '75%',
			height : '50%',
			top : 'middle',
			right : 'center'
		},
		legend : {
			data : ["价差电费", "电量"],
			x : "center",
			y : "bottom",
			textStyle : {
				color : '#eeeeee',
				fontSize : 12,
				fontFamily : 'Microsoft YaHei'
			}
		},
		tooltip:{"trigger":"item","formatter":"{b}{a}<br/>{c}"},
		calculable : true,
		xAxis : [{
			show : false
		}, {
			show : false
		}],
		yAxis : {
			type : 'category',
			data : ['用户总需求', '双边协商', '竞价交易'],
			nameTextStyle : {
				color : "#eeeeee"
			},
			axisLine : {
				lineStyle : {
					color : '#888888',
					width : 2
				}
			},
			axisTick : {
				show : false
			},
			axisLabel : {
				textStyle : {
					color : '#eeeeee',
					fontSize : 14
				}
			},
			splitLine : {
				show : false
			}
		},
		series : [{
			name : '价差电费',
			type : 'bar',
			xAxisIndex : 1,
			itemStyle : {
				normal : {
					label : {
						show : true,
						position : 'right',
						formatter : '{c} 元',
						textStyle : {
							fontSize : 14,
							color : '#ffffff'
						}
					}
				}
			},
			data : [52944070.6, 92758011.84, 6578088.96]
		}, {
			name : '电量',
			type : 'bar',
			itemStyle : {
				normal : {
					label : {
						show : true,
						position : 'right',
						formatter : '{c} MWh',
						textStyle : {
							fontSize : 14,
							color : '#ffffff'
						}
					}
				}
			},
			data : [264720, 193245, 44446]
		}],
		color : ['#a1ee7c', '#ea1f79']
	}