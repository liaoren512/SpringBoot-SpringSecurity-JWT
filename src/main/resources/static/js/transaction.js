$(function () {

    $("#submit").click(function () {
        var recevier = $("#recevier").val();
        var mount = $("#mount").val();
        if (!recevier || !mount){
            showMsg("请填入信息");
            return;
        }
        $.ajax({
            type:'POST',
            url:'../test',
            dataType : "json",
            data:{
                index : "invoke",
                recevier : recevier,
                mount : mount,
                sender : $("#sender").text(),
            },
            success : function (data) {

                showMsg(data.data,function () {
                    $("#query").trigger("click")
                });
            },

        });
    });
    
    $("#query").click(function () {
        var recevier = $("#recevier").val();
        if (!recevier){
            showMsg("请填入对象名");
            return;
        }
        var userVue = new Vue({
           el:"#user",
           data:{
               userList:[]
           },
            methods:{
               getUserState:function () {
                   $.ajax({
                       type:"post",
                       url : "../test",
                       dataType : "json",
                       data :{
                           index : "query",
                           recevier : recevier,
                           sender : $("#sender").text(),
                       },
                       success : function (data) {

                           console.log(data);
                           // userVue.userList = data;
                           Vue.set(userVue.userList,0,data[0]);
                           Vue.set(userVue.userList,1,data[1]);
                           var html = "";
                           for (var i=0;i<data.length;i++){
                               html += "<tr><td>"+data[i].user+"</td><td>"+data[i].data+"</td></tr>";
                           }
                           $("#user tbody").html(html)
                       },
                       error : function (data) {
                           showErrMsg()
                       }
                   });
               }
            }
        });
        userVue.getUserState();
    });

    $("#back").click(function () {
        // location.href = "./home.html";
        window.location.href = "/redirect?pagename=home";
    });
});

