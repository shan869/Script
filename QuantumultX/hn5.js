const path1 = "/ios/3.7.7";
let body = $response.body;
try {
  let data = JSON.parse(body);
  if ($request.url.indexOf(path1) !== -1) {
    if (Array.isArray(data.top)) {
      data.top.forEach((item) => (item.visible = 0));
    }
    if (Array.isArray(data.bottom)) {
      data.bottom.forEach((item) => (item.visible = 0));
    }
    $done({ body: JSON.stringify(data) });
  } else {
    $done({});
  }
} catch (error) {
  console.log("Failed to parse JSON body: ", error);
  $done({});
}
