const path1 = "/v1/get_purchase_list";
const path2 = "/v1/get_user_info";
const path3 = "/v1/get_vip_info";
const path4 = "/v3/get_home_info";
const path5 = "/v1/home?appversion";

let key = {"vip_type":1,"expire_time":1664532960,"last_product_id":"com.ihuman.book.sub.vip1m.trial1w","pack_list":[]};

let obj = JSON.parse($response.body);

// 动态生成 free_bookids 的函数
function generateFreeBookIds(obj) {
    let bookIds = [];
    
    // 从 books_all 中提取所有 bookid
    if (obj.result && obj.result.books_all) {
        for (var i = 0; i < obj.result.books_all.length; i++) {
            var ob = obj.result.books_all[i];
            if (ob.bookid) {
                bookIds.push(ob.bookid);
            }
        }
    }
    
    // 返回 JSON 字符串格式的数组
    return JSON.stringify(bookIds);
}

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
    for(var i = 0; i < obj.result.books_all.length; i++){
        var ob = obj.result.books_all[i];
        ob["allow_guest"] = 1;
        ob["is_vip"] = 0;
    }
    
    // 动态生成 free_bookids
    obj.result.free_bookids = generateFreeBookIds(obj);
}

if ($request.url.indexOf(path5) != -1){
    // 对于 home 接口，如果没有 books_all，可以设置空数组或从其他地方获取
    obj.result.free_bookids = "[]";  // 或者根据实际情况生成
}

if ($request.url.indexOf("/api/v1/getRadical") != -1){
    var list = obj.result;
    for (var i = 0; i < list.length; i++) {
        var item = list[i];
        item["isvip"] = 0;
    }  
}

if ($request.url.indexOf("/v3/get_purchase_list") != -1) {
    var vip = obj.result.vip;
    vip.vip_type = 1;
    vip.expire_time = "1695951991";
}

if ($request.url.indexOf("/v1/get_check_credential") != -1) {
    obj.result.storage_type = 1;
}

$done({body: JSON.stringify(obj)});
