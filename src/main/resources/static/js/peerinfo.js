$(function () {

    var peerVue = new Vue({
        el:"#peerlist",
        data:{
            peerList:[],
        },
        methods:{
            queryPeerInfo:function () {
                $.ajax({
                    url:"../test",
                    type:"post",
                    dataType:"json",
                    data:{
                        index:"getChannelInfo",
                    },
                    success:function (data) {
                        if (data && data.peers){
                            peerVue.peerList = data.peers;
                        }
                    }
                });
            }
        }
    });
    peerVue.queryPeerInfo();
    $("#back").click(function () {
        // location.href = "home.html";
        window.location.href = "/redirect?pagename=home";
    });
});
