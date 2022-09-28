/*
洪恩双语绘本 unlock Vip by 军哥哥

app 下载地址:https://t.cn/AiCEguqn

电报频道：https://t.me/ThorHCC
电报群组：https://t.me/f4thorHCC
QQ资源群：189519867
QQ吹牛群：316864309


888


QX:

[rewrite_local]👇

https:\/\/bookapi\.ihuman\.com\/(v1\/get\_user\_info|v1\/get\_purchase\_list|v1\/get\_vip\_info|v3\/get\_home\_info) url script-response-body hnsyhb.js


MITM = bookapi.ihuman.com

*/

const path1 = "/v1/get_purchase_list";
const path2 = "/v1/get_user_info";
const path3 = "/v1/get_vip_info";
const path4 = "/v3/get_home_info";

let key = {"vip_type":2,"expire_time":1664532960,"last_product_id":"com.ihuman.book.sub.vip1m.trial1w","pack_list":[]};

let key2 = {"allow_guest":1};


let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
	obj.result["vip_status"] = key;	
}
if ($request.url.indexOf(path2) != -1){
	obj.result.userinfo["vip_status"] = key;
}	

if ($request.url.indexOf(path3) != -1){
	obj.result["vip_status"] = key;
}

if ($request.url.indexOf(path4) != -1){
	obj.result["vip_status"] = key2;
}


$done({body: JSON.stringify(obj)});
