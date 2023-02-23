const path5 = "/v1/home";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path5) !== -1) {
  obj.result.bookInfos.forEach((bookInfo) => {
    bookInfo.book_id = "0011";
  });
}

$done({ body: JSON.stringify(obj) });
