$(function () {

    queryBlockInfo();
    initEvent();
});

function  queryBlockInfo() {

    var blockVue = new Vue({
        el:"#blocklist",
        data:{
            blockList:[],
        },
        methods:{
            getBlockInfo:function () {
                $.ajax({
                    url:"../test",
                    type:"post",
                    dataType:"json",
                    data:{
                        index:"getBlockInfo",
                    },
                    success:function (data) {
                        debugger
                        if(data && data.blockInfo) {
                            blockVue.blockList = data.blockInfo.sort(compare("blockNumber"));
                        }
                    },
                });
            },
        }
    });
    blockVue.getBlockInfo();
}
function initEvent() {

    $("#back").click(function () {
        window.location.href = "/redirect?pagename=home";
    });
}
function showDetail(obj) {

    if ($(obj).index()<2){
        showMsg("初始化块无交易信息");
        return;
    }
    var txID = $(obj).find("td").eq(4).text().trim();
    if (txID==null || txID=="") return;
    var tsVue = new Vue({
        el:"#txDetail",
        data:{
          transaction:{},
        },
        methods:{
            queryTxDetail:function () {
                $.ajax({
                    url:"../test",
                    type:"post",
                    dataType:"json",
                    data:{
                        index:"querytxdetail",
                        txID:txID,
                    },
                    success:function (data) {
                        if (data){
                            debugger
                            tsVue.transaction = data;
                            $('#txDetail').modal('show')
                            $('#identifier').on('hide.bs.modal', function () {
                                tsVue.transaction={};
                            })
                        }
                    }
                });
            }
        }
    });
    tsVue.queryTxDetail();
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
function showMsg(msg, callback) {
    layer.open({
        title: "提示",
        btn : [ 'OK' ],
        shadeClose : false,
        content : msg,
        end : callback
    })
}
