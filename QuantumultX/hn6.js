const path1 = "/kffk/sdk";
const path2 = "/v1/get_user_info";

if ($request.url.indexOf(path1) != -1){
	let body = JSON.parse($response.body);
    body.result.hasnew = 1;
}
$done({body: JSON.stringify(body)});
