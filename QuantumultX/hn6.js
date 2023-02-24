const path1 = "/flash/accountInit";
const path2 = "/v3/get_msg";

if ($request.url.indexOf(path2) != -1){
    
var obj = JSON.parse($response.body);
obj = {
  "code": 0,
  "message": "SUCCESS",
  "result": {
    "data": [],
    "has_more": 1,
    "need_read_flag": true
  }   
};
$done({body: JSON.stringify(obj)});
    
}
