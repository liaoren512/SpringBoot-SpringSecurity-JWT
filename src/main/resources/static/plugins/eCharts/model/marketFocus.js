// 市场焦点
var marketFocusOption = {
		grid : {
			width : '75%',
			height : '50%',
			top : 'middle',
			right : 'center'
		},
		legend : {
			data : ["价差(元/MWh)","总成交量(MWh)"],
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
			type : "category",
			nameTextStyle : {
				color : "#eeeeee",
				fontSize : 14
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
			},
			data : []
		}],
		yAxis : [{
			type : "value",
			nameTextStyle : {
				color : "#eeeeee",
				fontSize : 14
			},
			name : "价差(元/MWh)",
			min : -150,
			max : 150,
			axisLabel : {
				formatter : "{value}"
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
					fontSize : 12
				}
			},
			splitLine : {
				lineStyle : {
					color : '#888888',
					opacity : .3
				}
			}
		}, {
			name : "总成交量(MWh)",
			nameTextStyle : {
				color : "#eeeeee",
				fontSize : 14
			},
			type : "value",

			axisLabel : {
				formatter : "{value}"
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
					fontSize : 12
				}
			},
			splitLine : false
		}],
		series : [{
			name : "价差(元/MWh)",
			type : "bar",
			barCategoryGap : '50%',
			data : []
		}, {
			name : "总成交量(MWh)",
			yAxisIndex : 1,
			type : "line",
			itemStyle : {
				normal : {
					borderWidth : 5
				}
			},
			data : []
		}],
		color : ['#ed1e79', '#fdef1d']
	}