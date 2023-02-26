const path1 = "/log/logReport";
var body = JSON.parse($response.body);

if ($request.url.indexOf(path1) !== -1) {
    var obj = {
        "resultCode": "103000", 
        "config": {
            "sizelimit": "1", 
            "limitM": "25", 
            "norlog": "1", 
            "limitN": "3", 
            "crashlog": "1", 
            "limitX": "25", 
            "fusingTime": "1", 
            "failLimit": "3", 
            "timelimit": "2"
        }, 
        "desc": "success"
    };
    $done({ body: JSON.stringify(obj) });
} else {
    $done({ body: JSON.stringify(body) });
}
