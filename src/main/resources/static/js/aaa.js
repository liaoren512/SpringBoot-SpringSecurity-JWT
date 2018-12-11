s = ""
s += "<object id=DWebSignSeal classid='CLSID:77709A87-71F9-41AE-904F-886976F99E3E' style='position:absolute;width:0px;height:0px;left:0px;top:0px;'>"
s += "</object>";
s += "<object id=OcxObj classid='CLSID:D8D60313-EC74-47B9-8D31-69B2BAFB20C9' style='position:absolute;width:0px;height:0px;left:0px;top:0px;'>"
s += "</object>";
document.write(s)
function HkeyGetSealUserTest() {
    var sealUser = "";//sign data
    try {
        OcxObj.HKEY_Ocx_AtvEnd();
        OcxObj.HKEY_Ocx_AtvInit();
        var list = OcxObj.HKEY_Ocx_GetUserList();
        if (list == null || list == "" || list == undefined) {
            return sealUser;
        }
        document.write(list)
        document.write(OcxObj.toString())
        // return;
        if(list.split("&&&").length > 1) {
            return sealUser;
        }

        sealUser = OcxObj.HKEY_Ocx_Function(list, 191601, "MIIDPTCCAqagAwIBAgIQR5NA/7cxNJg4zo1l1TYn0DANBgkqhkiG9w0BAQUFADAfMQswCQYDVQQGEwJDTjEQMA4GA1UEAxMHR09MRCBDQTAeFw0xNjA5MjgwMjEwNTZaFw0xNzAzMjkwMjEwNTZaMHExCzAJBgNVBAYTAkNOMQswCQYDVQQIEwJTRDEPMA0GA1UEBxMGWWFudGFpMQswCQYDVQQLEwJERjEOMAwGA1UEChMFaGFpeWkxJzAlBgNVBAMeHo11mM5UGwBfAEgAYQBpAHkAaQBfAEEAYgAwADAANzCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAu3ugILK9p6uASz2LBfnw5/KHa0ZdhlUEB1oI+2MzFaZEZOUycnayxaQeYz7O3sQK3D7Fu80JRlRN23Hp9mM8PylBK5cp90Mj1YFT6RkR4v9S0e4ayPMqm6sqes3aqbLMOBQPlI7YTRmB0EMYmIr0zGiLGq/o/RTMkKHLR/YJMFsCAwEAAaOCASYwggEiMB8GA1UdIwQYMBaAFDpeq8J0zPxJDKH1KrVqbBj1JlQNMB0GA1UdDgQWBBS3JYvBw2+3/KjGq5A10fhiy102ZjAOBgNVHQ8BAf8EBAMCBsAwDAYDVR0TBAUwAwEBADBHBgNVHSUEQDA+BggrBgEFBQcDAQYIKwYBBQUHAwIGCCsGAQUFBwMDBggrBgEFBQcDBAYIKwYBBQUHAwgGCisGAQQBgjcUAgIwUgYDVR0fBEswSTBHoEWgQ6RBMD8xCzAJBgNVBAYTAkNOMRAwDgYDVQQDEwdHT0xEIENBMQwwCgYDVQQLEwNDUkwxEDAOBgNVBAMTB2NybDRfMTQwEQYIKoEc0BQEAQQEBRMDMTIzMBIGCCqBHNAUBAEFBAYTBDQ0NTUwDQYJKoZIhvcNAQEFBQADgYEA1ImwCRznFxo0NsxOiWZtg/Ow2skzHbeVZaj4hmREm7zJ/NNBgtOBuEf499eiujhd6APhGO6egk4JLs7up7DPo7pJ7Zt+vFyKINerKr8hecevVlislYaqG6g5KAH7YQb+CrGwcsY66HfeGRQb6FbFWQHNANvr/07WiFielo3b05w=");
        if(sealUser == "")
        {
            var logRet = OcxObj.HKEY_Ocx_Login(1,list,"111111");
            alert("logret = " + logRet);
            sealUser = OcxObj.HKEY_Ocx_Function(list, 191601, "MIIDPTCCAqagAwIBAgIQR5NA/7cxNJg4zo1l1TYn0DANBgkqhkiG9w0BAQUFADAfMQswCQYDVQQGEwJDTjEQMA4GA1UEAxMHR09MRCBDQTAeFw0xNjA5MjgwMjEwNTZaFw0xNzAzMjkwMjEwNTZaMHExCzAJBgNVBAYTAkNOMQswCQYDVQQIEwJTRDEPMA0GA1UEBxMGWWFudGFpMQswCQYDVQQLEwJERjEOMAwGA1UEChMFaGFpeWkxJzAlBgNVBAMeHo11mM5UGwBfAEgAYQBpAHkAaQBfAEEAYgAwADAANzCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAu3ugILK9p6uASz2LBfnw5/KHa0ZdhlUEB1oI+2MzFaZEZOUycnayxaQeYz7O3sQK3D7Fu80JRlRN23Hp9mM8PylBK5cp90Mj1YFT6RkR4v9S0e4ayPMqm6sqes3aqbLMOBQPlI7YTRmB0EMYmIr0zGiLGq/o/RTMkKHLR/YJMFsCAwEAAaOCASYwggEiMB8GA1UdIwQYMBaAFDpeq8J0zPxJDKH1KrVqbBj1JlQNMB0GA1UdDgQWBBS3JYvBw2+3/KjGq5A10fhiy102ZjAOBgNVHQ8BAf8EBAMCBsAwDAYDVR0TBAUwAwEBADBHBgNVHSUEQDA+BggrBgEFBQcDAQYIKwYBBQUHAwIGCCsGAQUFBwMDBggrBgEFBQcDBAYIKwYBBQUHAwgGCisGAQQBgjcUAgIwUgYDVR0fBEswSTBHoEWgQ6RBMD8xCzAJBgNVBAYTAkNOMRAwDgYDVQQDEwdHT0xEIENBMQwwCgYDVQQLEwNDUkwxEDAOBgNVBAMTB2NybDRfMTQwEQYIKoEc0BQEAQQEBRMDMTIzMBIGCCqBHNAUBAEFBAYTBDQ0NTUwDQYJKoZIhvcNAQEFBQADgYEA1ImwCRznFxo0NsxOiWZtg/Ow2skzHbeVZaj4hmREm7zJ/NNBgtOBuEf499eiujhd6APhGO6egk4JLs7up7DPo7pJ7Zt+vFyKINerKr8hecevVlislYaqG6g5KAH7YQb+CrGwcsY66HfeGRQb6FbFWQHNANvr/07WiFielo3b05w=");
        }
        alert(sealUser);
    }
    catch(e) {
        sealUser = "";
    }
    //OcxObj.HKEY_Ocx_AtvEnd();
    $('body').html(sealUser);
    document.write(sealUser);
    return sealUser;
}