const path1 = "/appconfig/bridge";

let body = JSON.parse($response.body);

if ($request.url.indexOf(path1) !== -1 && body.result) {
  body.result.type = "1";
}

$done({body: JSON.stringify(body)});
