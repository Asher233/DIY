/***********************************

# > 扇贝单词 hostname = apiv3.shanbay.com
^https:\/\/apiv3\.shanbay\.com\/(wordsapp\/vip\/user_item\/status|operation\/(tab_icons?|launch_screen\/future_splashes)|wordsutils\/hot_sales|abc\/applets\/applets\/burubg) url script-response-body https://raw.githubusercontent.com/Asher233/DIY/main/Script/sb.js

***********************************/
const url = $request.url;
const method = $request.method;
const getMethod = "GET";
const notifiTitle = "shanbay-pure";
let body = JSON.parse($response.body);

if(body) {
  // operation/launch_screen/future_splashes
  if(url.indexOf("operation/launch_screen/future_splashes") !== -1 && body.hasOwnProperty('objects') && body.objects.length !== 0) {
    body.objects.forEach(o => delete o.launch_screen)
  }

  // VIP
  if(url.indexOf("wordsapp/vip/user_item/status") !== -1) {
    body.status = 'IS_VIP'
  }

  // tabbar
  if(url.indexOf("operation/tab_icons?") !== -1) {
    delete body.CLASS
    delete body.DISCOVER
  }

  // wordsutils/hot_sales
  if(url.indexOf("wordsutils/hot_sales") !== -1 && body.hasOwnProperty('objects') && body.objects.length !== 0) {
    body.objects.length = 0
  }

  // 派生词汇 abc/applets/applets/burubg
  if(url.indexOf("abc/applets/applets/burubg") !== -1 && body.hasOwnProperty('user_applet')){
      body.user_applet.due_date = '2028-06-11'
  }
}

body = JSON.stringify(body);
$done({
    body
});
