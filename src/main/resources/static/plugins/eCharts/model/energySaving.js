// 负荷变化曲线图
var energySavingOption = {
		legend : {
			data : ['未施工', '建设中', '已完工'],
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
				value : 26,
				name : "未施工",
				itemStyle : {
					normal : {
						color : "#ed1e79"
					}
				}
			}, {
				value : 1,
				name : "建设中",
				itemStyle : {
					normal : {
						color : "#fdee21"
					}
				}
			}, {
				value : 5,
				name : "已完工",
				itemStyle : {
					normal : {
						color : "#a1ee7d"
					}
				}
			}]
		}]
	}