const path1 = "/v1/get_purchase_list";
const path2 = "/v1/get_user_info";
const path3 = "/v1/get_vip_info";
const path4 = "/v3/get_home_info";
const path5 = "/v1/home?appversion";

const key = {
    "vip_type": 1,
    "expire_time": 1664532960,
    "last_product_id": "com.ihuman.book.sub.vip1m.trial1w",
    "pack_list": []
};

let obj = JSON.parse($response.body);
const url = $request.url;

// VIP 状态注入
if (url.indexOf(path1) !== -1) {
    obj.result["vip_status"] = key;
}
if (url.indexOf(path2) !== -1) {
    obj.result.userinfo["vip_status"] = key;
}
if (url.indexOf(path3) !== -1) {
    obj.result["vip_status"] = key;
}

// get_home_info：解锁所有书 + 动态生成并缓存 free_bookids
if (url.indexOf(path4) !== -1) {
    const books = obj.result.books_all || [];
    const allIds = [];
    for (var i = 0; i < books.length; i++) {
        books[i]["allow_guest"] = 1;
        books[i]["is_vip"] = 0;
        // 兼容不同字段名
        const bid = books[i].bookid || books[i].book_id || books[i].id;
        if (bid) allIds.push(String(bid));
    }
    if (allIds.length > 0) {
        $persistentStore.write(JSON.stringify(allIds), "ihuman_bookids");
        obj.result.free_bookids = JSON.stringify(allIds);
    }
}

// home：优先读缓存，没有就生成全范围兜底
if (url.indexOf(path5) !== -1) {
    const cached = $persistentStore.read("ihuman_bookids");
    if (cached) {
        obj.result.free_bookids = cached;
    } else {
        // 兜底：覆盖常见 id 范围
        const ids = [];
        for (var i = 1; i <= 9999; i++) {
            ids.push(String(i).padStart(4, "0"));
        }
        obj.result.free_bookids = JSON.stringify(ids);
    }
}

// Radical 接口
if (url.indexOf("/api/v1/getRadical") !== -1) {
    const list = obj.result || [];
    for (var i = 0; i < list.length; i++) {
        list[i]["isvip"] = 0;
    }
}

// v3 购买列表
if (url.indexOf("/v3/get_purchase_list") !== -1) {
    obj.result.vip.vip_type = 1;
    obj.result.vip.expire_time = "1695951991";
}

// 登录凭证
if (url.indexOf("/v1/get_check_credential") !== -1) {
    obj.result.storage_type = 1;
}

$done({ body: JSON.stringify(obj) });
