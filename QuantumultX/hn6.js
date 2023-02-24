const path1 = "/v3/get_msg";
const path2 = "/v1/get_user_info";


let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
	obj.result.need_read_flag = true;
	obj.result.has_more = 1
}
	
	
$done({body: JSON.stringify(obj)});
