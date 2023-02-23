const path5 = "/v1/home?appversion";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path5) != -1){
  
let freeIds = obj.result.bookInfos.free_bookids ? JSON.parse(obj.result.bookInfos.free_bookids) : [];
for (let i = 5; i <= 30; i++) {
  freeIds.push(`000${i}`);
}
obj.result.bookInfos.free_bookids = JSON.stringify(freeIds);

}

$done({ body: JSON.stringify(obj) });
