var blockVue;
$(function(){
	
	var nh = $(window).height()-$("#summary .panel").height()-95;
	$('.panel-top').css('height',nh/2+'px');
	$('.panel-bottom').css('height',nh/2+'px');	
	$('#blocktxchart').css('height',$('.panel-top').height()-42);
	$('.fixedhead').css('height',$('.panel-top').height()-42);
	$('#orgchart').css('height',$('.panel-bottom').height()-42);
	$('#blockdetail').css('height',$('.panel-bottom').height()-20);
	
	//initBlock();
	//initEChart();
	//initPage();
	
	//getChaincodesMessage()
	initEvent();
	
});
var initBlock = function(){
	//var userInfo = HkeyGetSealUserTest();
	$.ajax({
		type:'POST',
		url:'../test',
        dataType : "json",
		data:{
		// 	userName : userInfo.userName,
		// 	orgName : userInfo.userOrg,
			index : "init"
		},
		success:function(data){
			debugger
			console.log("success");
			console.log(data);
			if (data){
                if (data.code == "success"){
                    showMsg("初始化成功");
				} else{
                    showErrMsg(data.message);
				}
			}
			// if (data) {
			// 	var response = JSON.parse(data);
			// 	if(response.errorMessage){
			// 		setModalContent(response.errorMessage);
			// 		$("#myModal").modal("show");
			// 		//alert(result.errorMessage);
			// 		return;
			// 	}
			// 	var msg=response.message;
			// 	setModalContent(msg);
			// 	$("#myModal").modal("show");
			// 	//$.tips('提示信息', msg, 2000, 2);
			// 	initPage();
			// };
            //initPage();
		},
		error : function(data) {
            debugger
            console.log("fail");
			console.log(data)
            if (data){
            	if (data.responseText && eval("("+data.responseText+")").code == "success") {
                    showMsg("初始化成功");
                }else {
                    showErrMsg(eval("("+data.responseText+")").message);
				}
                //initPage();
            }
			return;
		}
	});

}

var initPage = function(){
	getBlockMessage();
	getPeerMessage();
	//getChaincodesMessage();
}

var initEChart = function(){
	//initBlocksTx();
	//initOrg();
}

var initEvent = function(){

	$("#init").click(function () {

        initBlock();
    });

	$("#search").click(function () {

		initPage();
    });

	$("#blocks-tx li").click(function(){
		
		$("#blocks-tx li").removeClass('active');
		$(this).addClass('active');
		initBlocksTx(blockVue.blockList,$(this).data("val"));
	});
};

var initBlocksTx = function(blockList,chartFlg){
	var xData = [];
	var yData = [];
	var blockListSort = blockList.slice(0);
	blockListSort.sort(compare("blockNumber"));
	if(chartFlg==$("#blocks-tx li:eq(0)").data("val") || chartFlg==$("#blocks-tx li:eq(1)").data("val")){
		var blockListGroup = _.groupBy(blockListSort,function(d){return $.trim(d.blockNumber)});
		var blockdate ;
		for(prop in blockListGroup){
			blockListGroup[prop].sort(compare("timestamp"));
			blockdate = new Date(blockListGroup[prop][0].timestamp).Format("yyyy-MM-dd hh:mm:ss").toString();
			if($.inArray(blockdate,xData)<0){
				xData.push(blockdate);
				yData.push(1);		
			}else{
				yData[$.inArray(blockdate,xData)] ++;
			}
		}
	}else if(chartFlg==$("#blocks-tx li:eq(2)").data("val") || chartFlg==$("#blocks-tx li:eq(3)").data("val")){
		var blockdate ;
		blockListSort.forEach(function(ele,index){
			if(ele.blockNumber!=0 && ele.blockNumber!=1){
				blockdate = new Date(ele.timestamp).Format("yyyy-MM-dd hh:mm:ss").toString();
				if($.inArray(blockdate,xData)<0){
					xData.push(blockdate);
					yData.push(1);		
				}else{
					yData[$.inArray(blockdate,xData)] ++;
				}				
			}
		});
	}
	var blocktxChart = echarts.init(document.getElementById('blocktxchart')); 
    option = {
		    tooltip : {
		        trigger: 'axis',
		        formatter: "{b} <br> {c}"
		    },
		    calculable : true,
		    xAxis : [
		        {
		            type : 'category',
		            boundaryGap : true,
		            /**data : ['1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM','8:00 PM','9:00 PM',
		            	'10:00 PM','11:00 PM','12:00 PM','1:00 AM','2:00 AM','3:00 AM','4:00 AM','6:00 AM','6:00 AM',
		            	'7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 AM']*/
		            data : xData,
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		        }
		    ],
		    series : [
		        {
		            type:'line',
		            //data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
					data : yData,
		        },
		    ]
		};
                    
	blocktxChart.setOption(option);
}
var initOrg = function(blockList){
	var legendData = [];
	var seriesData = [];
	var orgList = [];
	blockList.forEach(function(block,index){
		// orgList = block.orgList.split(",");
		// if(block.blockNumber!=0 && block.blockNumber!=1){
		// 	orgList.forEach(function(org,count){
				if($.inArray(block.org,legendData)<0){
					legendData.push(block.org);
					seriesData.push({value:1,name:block.org});
				}else{
					seriesData[$.inArray(block.org,legendData)].value ++;
				}
			// });
		// }
	});
	var orgChart = echarts.init(document.getElementById('orgchart'));
	option = {
		    tooltip : {
		        trigger: 'item',
		        formatter: "{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient : 'horizontal',
		        y: 'top',
		        //data:['OrdererMSP','Org1MSP','Org2MSP']
		        data:legendData,
		    },
		    calculable : true,
		    series : [
		        {
		            name:'',
		            type:'pie',
		            radius : '55%',
		            center: ['50%', '50%'],
		           /** data:[
		                {value:56, name:'OrdererMSP'},
		                {value:22, name:'Org1MSP'},
		                {value:22, name:'Org2MSP'},
		            ]*/
		           data:seriesData,
		        }
		    ]
		};
	orgChart.setOption(option);              
}
var getBlockMessage = function(){
	// var userInfo = HkeyGetSealUserTest();
	blockVue = new Vue({
		el:"#blockdetail",
		data:{
			blockList:[],
		},
		methods:{
			getBlockMessage:function(){
				$.ajax({
					type:'POST',
					url: '../test',
					data:{
						// userName : userInfo.userName,
						// orgName : userInfo.userOrg,
						index : "getBlockInfo"
					},
					success : function(data) {
						//console.log(data)
                        getChaincodesMessage();
						if(data){
							// var result = JSON.parse(data);
							// if(result.errorMessage){
							// 	setModalContent(result.errorMessage);
							// 	$("#myModal").modal("show");
							// 	//alert(result.errorMessage);
							// 	return;
							// }
							if(data && data.blockInfo) {
								blockVue.blockList = data.blockInfo.sort(compareDesc("blockNumber"));
								// 区块/交易图表
								initBlocksTx(blockVue.blockList,$("#blocks-tx li:eq(0)").data("val"));
								// 区块数
								setBlockCount(blockVue.blockList.slice(0));
								// 组织交易图表
								initOrg(blockVue.blockList.slice(0));
								
								var sum=0;
								blockVue.blockList.forEach(function(ele,index){
									var timediff=(new Date()-new Date(ele.timestamp))/1000;
									if(timediff<60){
										timediff=Math.floor(timediff)+"秒前";
									}else{
										timediff=timediff/60;
										if (timediff<60) {
											timediff=Math.floor(timediff)+"分前";
										}else{
											timediff=timediff/60;
											if(timediff<24){
												timediff=Math.floor(timediff)+"小时前";
											}else{
												timediff=timediff/24;
												timediff=Math.floor(timediff)+"天前";
											}
										}
									}
									ele.timediff=timediff;
									if(ele.blockNumber!=1 && ele.blockNumber!=0){
										sum += parseInt(ele.numberOfTx);
									}
								});
								$("#transCount").text(sum);
							}
						}

					},
					error : function(data) {
						console.log(data)	
					}
				});
			}
		}
	});
	blockVue.getBlockMessage();
}
var getPeerMessage = function(){
	// var userInfo = HkeyGetSealUserTest();
	var peerVue = new Vue({
		el:"#peer",
		data:{
			peerList:[],
		},
        // mounted:function(){
        //     var _this = this;
        //     this.$nextTick(function(){
        //         _this.getPeerMessage();
        //     });
        // },
		methods:{
			getPeerMessage:function(){
                var _this = this;
				$.ajax({
					type:'POST',
					url: '../test',
					data:{
						// userName : userInfo.userName,
						// orgName : userInfo.userOrg,
						index : "getChannelInfo"
					},
					success : function(data) {
						//debugger
						if(data){
							if(data.peers) {
								var html="";
                                for (var i=0; i< data.peers.length; i++) {
                                    if (data.peers[i].statuscode == 1){
                                        data.peers[i].status = "运行";
                                    }else {
                                        data.peers[i].status = "停止";
                                    }
                                    html += '<tr><td class="col-md-8">'+data.peers[i].peerName+'</td>' +
										'<td class="col-md-4"><span class="label label-success">'+data.peers[i].status+'</span></td></tr>';
                                }
                                peerVue.peerList = data.peers;
                                // peerVue.$nextTick(function () {
                                //     peerVue.$forceUpdate();
                                // })
                                //_this.$forceUpdate();
                                $("#peer").html(html);
                                $("#peerCount").text(peerVue.peerList.length);
							}
						}
                        // getChaincodesMessage();
					},
					error : function(data) {
						console.log(data)
					}
				});

			}
		}
	});
	peerVue.getPeerMessage();
}
var getChaincodesMessage = function(){
	//var userInfo = HkeyGetSealUserTest();
	var chaincodesVue = new Vue({
		el:"#orgchart",
		data:{
			chaincodesList:[],
		},
		methods:{
			getChaincodesMessage:function(){
				$.ajax({
					type:'POST',
					url: '../test',
					data:{
						//userName : userInfo.userName,
						//orgName : userInfo.userOrg,
						index : "chaincode"
					},
					success : function(data) {
						//console.log(data)
						debugger
						// if(data){
						// 	var result = JSON.parse(data);
						// 	if(result.errorMessage){
						// 		setModalContent(result.errorMessage);
						// 		$("#myModal").modal("show");
						// 		//alert(result.errorMessage);
						// 		return;
						// 	}
						// 	if(result.dataWraps.dataWrap.dataList) {
						// 		chaincodesVue.chaincodesList = result.dataWraps.dataWrap.dataList;
						// 		$("#chaincodeCount").text(chaincodesVue.chaincodesList.length);
						// 		if(chaincodesVue.chaincodesList <= 0){
						// 			initBlock();
						// 		}else{
						// 			getBlockMessage();
						// 			getPeerMessage();
						// 		}
						// 	}
						// }
						if (data){
							if (data.code == "success"){
                                $("#chaincodeCount").text(data.data);
							}else{
								showErrMsg(data.data);
							}
						}
					},
					error : function(data) {
						console.log(data)	
					}
				});
			}
		}
	});
	chaincodesVue.getChaincodesMessage();
}
var setBlockCount = function(blockList){
	var blockListGroup = _.groupBy(blockList,function(d){return $.trim(d.blockNumber)});
	var blockNum = 0;
	for(var block in blockListGroup){
		blockNum++;
	}
	$("#blockCount").text(blockNum);
}
var compareDesc = function (prop) {
    return function (obj1, obj2) {
        var val1 = obj1[prop];
        var val2 = obj2[prop];
        if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
            val1 = Number(val1);
            val2 = Number(val2);
        }
        if (val1 < val2) {
            return 11;
        } else if (val1 > val2) {
            return -1;
        } else {
            return 0;
        }            
    } 
}
var compare = function (prop) {
    return function (obj1, obj2) {
        var val1 = obj1[prop];
        var val2 = obj2[prop];
        if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
            val1 = Number(val1);
            val2 = Number(val2);
        }
        if (val1 > val2) {
            return 11;
        } else if (val1 < val2) {
            return -1;
        } else {
            return 0;
        }            
    } 
}
var goNextPage= function(pagename){
	// location.href='../../iecp/block/'+pagename+'.do?';
	location.href = pagename + ".html";
}
//const countOccurences = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
// 日期格式化
Date.prototype.Format = function(fmt) {
	var o = {
		"M+" : this.getMonth() + 1, // 月份
		"d+" : this.getDate(), // 日
		"h+" : this.getHours(), // 小时
		"m+" : this.getMinutes(), // 分
		"s+" : this.getSeconds(), // 秒
		"q+" : Math.floor((this.getMonth() + 3) / 3), // 季度
		"S" : this.getMilliseconds()
	// 毫秒
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
				.substr(4 - RegExp.$1.length));
	for ( var k in o)
		if (new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])
					: (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}
var setModalContent = function(msg){
	$('#myModal').on('show.bs.modal',function(){
		$('#myModal .modal-body').text(msg);
	});
}