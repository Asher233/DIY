/***********************************

# > SSA丝社 hostname = www.ssalegs.store
^https://www.ssalegs.store/cms/Appapi/username/username url script-response-body https://raw.githubusercontent.com/Asher233/DIY/main/Script/SSA.js

***********************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/cms/Appapi/username/username';

if (url.indexOf(vip) != -1) {
    obj.point= 999999;
    obj.jomkenylv = 99;
    obj.groupname = "白金会员";
    obj.overduedate = 2027383523;
    obj.overduedate2 = 2027383523;
    body = JSON.stringify(obj);
}
$done({body});
