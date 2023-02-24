const path1 = "/api/v1/getRadical";
const path2 = "/v1/get_user_info";
const path3 = "/v1/get_vip_info";
const path4 = "/v3/get_home_info";
const path5 = "/v1/home?appversion";

var body = $response.body;
var obj = JSON.parse(body);


if ($request.url.indexOf(path1) != -1){
obj.result.forEach(function(item) {
    item.isvip = 0;
});	
}

$done(JSON.stringify(obj));
