
var bidTrendOption = {
		grid : {
			width : '75%',
			height : '50%',
			top : 'middle',
			right : 'center'
		},
		legend : {
			data : ["电量(MWh)", "价差(元/MWh)"],
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
			data : ["01月", "02月", "03月", "04月", "05月", "06月", "07月", "08月", "09月", "10月", "11月", "12月"],
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
		}],
		yAxis : [{
			type : "value",
			nameTextStyle : {
				color : "#eeeeee",
				fontSize : 14
			},
			name : "电量(MWh)",
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
			name : "价差(元/MWh)",
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
			name : "电量(MWh)",
			type : "bar",
			barCategoryGap : '35%',
			data : [241018, 254082, 267994, 273033, 287076, 300734, 313347, 322799, 0, 0, 0, 0]
		}, {
			name : "价差(元/MWh)",
			yAxisIndex : 1,
			type : "line",
			itemStyle : {
				normal : {
					borderWidth : 5
				}
			},
			data : [126, 119, 124, 147, 134, 98, 58, 56, 0, 0, 0, 0]
		}],
		color : ['#ed1e79', '#fdef1d']
	}