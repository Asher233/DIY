/***********************************

# > 财新 hostname = mappsv5.caixin.com
https://mappsv5.caixin.com/articlev5/* url script-response-body https://raw.githubusercontent.com/Asher233/Loon/main/cx.js

***********************************/

re('isPay > 0','isPay <= 0')

function re() {
 var body = $response.body;
 if (arguments[0].includes("@")) {
  var regs = arguments[0].split("@");
  var strs = arguments[1].split("@");
  for (i = 0;i < regs.length;i++) {
   var reg = new RegExp(regs[i],"g");
   body = body.replace(reg, strs[i]);
 }
}
 else {
  var reg = new RegExp(arguments[0],"g");
  body = body.replace(reg, arguments[1]);
}
 $done(body);
} 
