const path1 = "/v3/get_msg";
var body = JSON.parse($response.body);
if ($request.url.indexOf(path1) != -1){
var obj = {
  "code": 0,
  "message": "SUCCESS",
  "result": {
    "data": [],
    "has_more": 0,
    "need_read_flag": false
  }
};

  }

$done({ body: JSON.stringify(obj) });
