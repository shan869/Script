const path1 = "/v1/config/resource_position";
const path2 = "/v1/get_user_info";
const path3 = "/v1/get_vip_info";
const path4 = "/v3/get_home_info";
const path5 = "/v1/home?appversion";


let obj = JSON.parse($response.body);


if ($request.url.indexOf(path1) != -1){
   obj.result.show_off = false
}
	
$done({body: JSON.stringify(obj)});
