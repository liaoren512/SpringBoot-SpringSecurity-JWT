var parkMonthQuantityBarGraphOption = {
		grid : {
			width : '75%',
			height : '50%',
			top : 'middle',
			right : 'center'
		},
		legend : {
			data : ['本期电量', '同期电量'],
			x : "center",
			y : "bottom",
			textStyle : {
				color : '#eeeeee',
				fontSize : 12,
				fontFamily : 'Microsoft YaHei'
			}
		},
		tooltip : {
			trigger : 'axis',
			textStyle : {
				fontSize : 14
			},
			formatter : function(params, ticket, callback) {
				var res = '';
				if (params[0].name != null && params[0].name != '') {
					res = '' + params[0].name + '月<br/>';
					for (var i = 0; i < params.length; i++) {
						if (params[i].data != '' && params[i].data != null) {
							res += params[i].seriesName + ' : ' + params[i].value + 'MWh<br/>';
						} else {
							res += params[i].seriesName + ' : 0<br/>';
						}
					}
				}
				return res;
			}
		},
		calculable : true,
		xAxis : [{
			type : 'category',
			splitLine : false,
			boundaryGap : [1, 0],
			data : ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
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
					fontFamily : 'Arial',
					fontSize : 14
				}
			}
		}],
		yAxis : [{
			name : '电量(MWh)',
			type : 'value',
			nameTextStyle : {
				color : "#eeeeee",
				fontFamily : 'Microsoft YaHei',
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
					fontFamily : 'Arial',
					fontSize : 14
				}
			},
			splitLine : {
				lineStyle : {
					color : '#888888',
					opacity : .3
				}
			}
		}],
		series : [
			{
				name : '本期电量',
				type : "bar",
				barCategoryGap : '35%',
				data : [851585.73, 800199.78, 963973.53, 932130.24, 965013.29, 848364.7, 898944.15, 34332.26, 0, 0, 0, 0]
			}, {
				name : '同期电量',
				type : "bar",
				barCategoryGap : '35%',
				data : [851338.78, 768965.76, 851377.9, 823934.88, 851426.27, 823976.24, 851453.96, 921738.08, 0, 0, 0, 0]
			}
		],
		color : ['#eb1e79', '#a1ee7c']
	}