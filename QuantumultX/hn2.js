const path5 = "/v1/home?appversion";

if ($request.url.indexOf(path5) !== -1) {
  let obj = JSON.parse($response.body);
  var bookids = [];

  for (var i = 1; i <= 20; i++) {
      bookids.push(i.toString().padStart(4, '0'));
  }

  obj.result.free_bookids = JSON.stringify(bookids);

  $done({body: JSON.stringify(obj)});
} else {
  $done({});
}
