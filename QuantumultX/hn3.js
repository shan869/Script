const path5 = "/v1/home?appversion";

if ($request.url.indexOf(path5) !== -1) {
  let body = $response.body;
try {
    let json = JSON.parse(body);
    let bookInfos = json.result.bookInfos;
    for (let i = 0; i < bookInfos.length; i++) {
        bookInfos[i].book_id = "0011";
    }
    body = JSON.stringify(json);
} catch (error) {
    console.log("Error: " + error);
}
$done({body});
  $done({body: JSON.stringify(obj)});
} else {
  $done({});
}
