// 负荷变化曲线图
var signQuantityOption = {
		title : {
			text : '电量(MWh)',
			textStyle : {
				color : '#eeeeee',
				fontSize : 14,
				fontFamily : 'Microsoft YaHei'
			},
			x : 5,
			y : 40
		},
		legend : {
			data : ["年度长协", "月度协议", "有签约意向"],
			top : "bottom",
			x : "center",
			textStyle : {
				color : '#ffffff',
				fontSize : 12,
				fontFamily : 'Microsoft YaHei'
			}
		},
		calculable : true,
		series : [{
			name : '签约情况统计',
			type : 'pie',
			radius : ['0%', '50%'],
			itemStyle : {
				normal : {
					label : {
						show : true,
						formatter : "{b}\n【 {c} 】\n{d} %",
						textStyle : {
							fontSize : 14
						}
					},
					borderColor : '#333333',
    				borderWidth : 2,
					"labelLine" : {
						"show" : true
					}
				}
			},
			data : [{
				value : 67,
				name : "年度长协",
				itemStyle : {
					normal : {
						color : "#a1ee7d"
					}
				}
			}, {
				value : 30,
				name : "月度协议",
				itemStyle : {
					normal : {
						color : "#fdee21"
					}
				}
			}, {
				value : 20,
				name : "有签约意向",
				itemStyle : {
					normal : {
						color : "#ed1e79"
					}
				}
			}]
		}]
	}