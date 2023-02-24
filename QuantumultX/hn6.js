const path1 = "/v3/get_msg";
const path2 = "/v1/get_user_info";



if ($request.url.indexOf(path1) != -1){
	var modifiedJson = $response.body.replace(/"has_more":\s*0/, "\"has_more\": 1").replace(/"need_read_flag":\s*false/, "\"need_read_flag\": true");
}
$done({body: modifiedJson});
