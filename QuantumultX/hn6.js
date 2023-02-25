const path1 = "/v3/get_msg";
if ($request.url.indexOf(path1) != -1){
var body = JSON.parse($response.body);
var obj = {
  "code": 0,
  "message": "SUCCESS",
  "result": {
    "data": [],
    "has_more": 0,
    "need_read_flag": false
  }
};
$done({ body: JSON.stringify(obj) });
  }
