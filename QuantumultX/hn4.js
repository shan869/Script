var body = $response.body;
var obj = JSON.parse(body);

obj.result.forEach(function(item) {
    item.isvip = 0;
});

$done(JSON.stringify(obj));
