const path1 = "/flash/accountInit";
const path2 = "/v1/get_user_info";

if ($request.url.indexOf(path1) != -1){
    $done({
        "response": {
            "status": 200,
            "headers": {
                "Content-Type": "application/json"
            },
            "body": "{\"retCode\":\"0\",\"retMsg\":\"成功\",\"data\":{\"appId\":\"fjyeD8Jw\",\"ispStatus\":\"1111\",\"cmccAppid\":\"300011979069\",\"cmccAppkey\":\"C5F301DD625E8A5301C3400785DCBAE5\",\"ctccAppid\":\"8237730665\",\"ctccAppkey\":\"nqgqJQtSAkwf2oOnAgSbGaLpAtXv7MS1\",\"cuccAppid\":\"MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDHJ8BM9onsgD+FQKtYqesHj363nZPm8zvamhPBnhXJb0vR0tjNXXBejbIndiKd9hmslVTNrJDSzgfe0UC9/MWiEv3z2eFidsF3o1ZkJycyfsqL8KKf4ruJuFGNlGcykpj+Q3TjTdEX4k7iWG0chHlXeHKE7nDZSsT3qDjwpvXb6wIDAQAB\",\"cuccAppkey\":\"beb4d907bd9fc99a9ab8a7d7f8a214f826b8d563\",\"woClientId\":\"99166000000000041260\",\"woClientSecret\":\"c2f2f066257c9a033113c79fd7253e6b\",\"appPlatform\":\"1\",\"ctccPreFlag\":\"3590\",\"cuccPreFlag\":\"1700\",\"cmccPreFlag\":\"3600\",\"reportMax\":\"10000\",\"initFlag\":\"1\",\"reportFlag\":\"600\",\"accOff\":\"1\",\"reportCount\":\"1000\",\"authPageFlag\":\"2\",\"cmccfn\":\"1\",\"ssl\":\"0\",\"sto\":\"4,4,5\",\"accountFlag\":\"1\"},\"retSuccessCode\":\"0\"}"
        }
    });
}

}

