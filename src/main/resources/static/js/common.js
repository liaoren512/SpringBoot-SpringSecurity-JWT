$(document).ajaxStart(function() {
    gloableWaitDialogIndex = layer.open({
        type : 2,
        shadeClose : false
    });
}).ajaxStop(function() {
    layer.close(gloableWaitDialogIndex);
});

function showMsg(msg, callback) {
    layer.open({
        title: "提示",
        btn : [ 'OK' ],
        shadeClose : false,
        content : msg,
        end : callback
    })
}

function showErrMsg(msg, callback) {
    layer.open({
        // title: [
        // 'エラー',
        // 'color:#FF0000;border:none;'
        // ],
        style : 'color:#FF0000;',
        btn : [ 'OK' ],
        shadeClose : false,
        content : msg,
        end : callback
    });

}

var websocket = null;
//判断当前浏览器是否支持WebSocket
if ('WebSocket' in window) {
    websocket = new WebSocket("ws://localhost:8080/websocket?test");
}
else {
    alert('当前浏览器 Not support websocket')
}

//连接发生错误的回调方法
websocket.onerror = function () {
    console.error("WebSocket连接发生错误");
};

//连接成功建立的回调方法
websocket.onopen = function () {
    console.log("WebSocket连接成功");
}

//接收到消息的回调方法
websocket.onmessage = function (event) {
    console.log("来自服务端的消息：")
    console.log(event.data);
    console.log("开始加密啊")
    websocket.send(HkeyGetSealUserTest(event.data));
    websocket.sessionId
    console.log(HkeyGetSealUserTest(event.data))
}

//连接关闭的回调方法
websocket.onclose = function () {
    console.log("WebSocket连接关闭");
    websocket = null;
}

//监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
window.onbeforeunload = function () {
    closeWebSocket();
}

//关闭WebSocket连接
function closeWebSocket() {
    websocket.close();
}

//发送消息
function send() {
    var message = document.getElementById('text').value;
    websocket.send(message);
}

function HkeyGetSealUserTest(data) {
    var sealUser = "";//sign data
    try {
        OcxObj.HKEY_Ocx_AtvEnd();
        OcxObj.HKEY_Ocx_AtvInit();
        var list = OcxObj.HKEY_Ocx_GetUserList();
        if (list == null || list == "" || list == undefined) {
            return sealUser;
        }
        if(list.split("&&&").length > 1) {
            return sealUser;
        }
        var logRet = OcxObj.HKEY_Ocx_Login(1,list,"111111");
        // alert("logret = " + logRet);
        // sealUser = OcxObj.HKEY_Ocx_Function(list, 191601, "MIIDPTCCAqagAwIBAgIQR5NA/7cxNJg4zo1l1TYn0DANBgkqhkiG9w0BAQUFADAfMQswCQYDVQQGEwJDTjEQMA4GA1UEAxMHR09MRCBDQTAeFw0xNjA5MjgwMjEwNTZaFw0xNzAzMjkwMjEwNTZaMHExCzAJBgNVBAYTAkNOMQswCQYDVQQIEwJTRDEPMA0GA1UEBxMGWWFudGFpMQswCQYDVQQLEwJERjEOMAwGA1UEChMFaGFpeWkxJzAlBgNVBAMeHo11mM5UGwBfAEgAYQBpAHkAaQBfAEEAYgAwADAANzCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAu3ugILK9p6uASz2LBfnw5/KHa0ZdhlUEB1oI+2MzFaZEZOUycnayxaQeYz7O3sQK3D7Fu80JRlRN23Hp9mM8PylBK5cp90Mj1YFT6RkR4v9S0e4ayPMqm6sqes3aqbLMOBQPlI7YTRmB0EMYmIr0zGiLGq/o/RTMkKHLR/YJMFsCAwEAAaOCASYwggEiMB8GA1UdIwQYMBaAFDpeq8J0zPxJDKH1KrVqbBj1JlQNMB0GA1UdDgQWBBS3JYvBw2+3/KjGq5A10fhiy102ZjAOBgNVHQ8BAf8EBAMCBsAwDAYDVR0TBAUwAwEBADBHBgNVHSUEQDA+BggrBgEFBQcDAQYIKwYBBQUHAwIGCCsGAQUFBwMDBggrBgEFBQcDBAYIKwYBBQUHAwgGCisGAQQBgjcUAgIwUgYDVR0fBEswSTBHoEWgQ6RBMD8xCzAJBgNVBAYTAkNOMRAwDgYDVQQDEwdHT0xEIENBMQwwCgYDVQQLEwNDUkwxEDAOBgNVBAMTB2NybDRfMTQwEQYIKoEc0BQEAQQEBRMDMTIzMBIGCCqBHNAUBAEFBAYTBDQ0NTUwDQYJKoZIhvcNAQEFBQADgYEA1ImwCRznFxo0NsxOiWZtg/Ow2skzHbeVZaj4hmREm7zJ/NNBgtOBuEf499eiujhd6APhGO6egk4JLs7up7DPo7pJ7Zt+vFyKINerKr8hecevVlislYaqG6g5KAH7YQb+CrGwcsY66HfeGRQb6FbFWQHNANvr/07WiFielo3b05w=");
        sealUser = OcxObj.HKEY_Ocx_Function(list, 191601, data);
        // alert(sealUser);
    }
    catch(e) {
        sealUser = "";
    }
    OcxObj.HKEY_Ocx_AtvEnd();
    return sealUser;
}