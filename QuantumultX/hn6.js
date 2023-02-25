const path1 = "/v1/config/resource_position";
const path2 = "/v1/get_user_info";
const path3 = "/v1/get_vip_info";
const path4 = "/v3/get_home_info";
const path5 = "/v1/home?appversion";

var body = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
   var obj = {
     "code": 0,
     "message": "success",
     "result": [{
       "name": "inter_app",
       "show_off": false,
       "url": "https://static.ihumand.com/h5/shizi/multidisciplinary/index.html#/",
       "event": "TwoSubjectsNinetyPercent"
     }, {
       "name": "pinyin",
       "show_off": false,
       "url": "https://m.ihuman.com/h5/words/material-market/index/productDetail/?sceneCode=SC_shizi_sell_pinyin&appchannel=shizishangcheng&source=airplane&airname=pinyin",
       "event": "SC_shizi_sell_pinyin"
     }]
   };
   $done({body: JSON.stringify(obj)});
}
