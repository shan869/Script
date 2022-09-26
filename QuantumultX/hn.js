/*
洪恩双语绘本 unlock Vip by 军哥哥

app 下载地址:https://t.cn/AiCEguqn

电报频道：https://t.me/ThorHCC
电报群组：https://t.me/f4thorHCC
QQ资源群：189519867
QQ吹牛群：316864309

QX:

[rewrite_local]👇

https:\/\/bookapi\.ihuman\.com\/(v1\/get\_user\_info|v1\/get\_purchase\_list) url script-response-body hnsyhb.js


MITM = bookapi.ihuman.com

*/

const path1 = "/v3/get_vip_info";

let key = {"expire_time":7955110875,"vip_type":1,"last_product_id":"com.ihuman.book.sub.vip1y"};

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
	obj.result["vip_status"] = key;	
}



$done({body: JSON.stringify(obj)});
