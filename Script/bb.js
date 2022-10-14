/***********************************

# > 不背单词 hostname = learnywhere.cn
^https:\/\/learnywhere\.cn\/api\/bb\/buy\/vip\/purchase? url script-response-body https://raw.githubusercontent.com/Asher233/DIY/main/Script/bb.js
^https:\/\/learnywhere\.cn\/api\/activity\/common\/bb-user-category? url script-response-body https://raw.githubusercontent.com/Asher233/DIY/main/Script/bb.js
^https:\/\/learnywhere\.cn\/api\/bb\/buy\/wordderive\/purchase url script-response-body https://raw.githubusercontent.com/Asher233/DIY/main/Script/bb.js
^https:\/\/learnywhere\.cn\/api\/bb\/buy\/wordderive\/purchase\/update url script-response-body https://raw.githubusercontent.com/Asher233/DIY/main/Script/bb.js
^https:\/\/learnywhere\.cn\/api\/bb\/buy\/collins\/purchase url script-response-body https://raw.githubusercontent.com/Asher233/DIY/main/Script/bb.js
^https:\/\/learnywhere\.cn\/api\/bb\/buy\/collins\/purchase\/update url script-response-body https://raw.githubusercontent.com/Asher233/DIY/main/Script/bb.js

***********************************/

const url = $request.url;
const method = $request.method;
const getMethod = "GET";
const notifiTitle = "bbdc-crack";
let body = JSON.parse($response.body);

if(body.hasOwnProperty('data_body')) {
    if(url.indexOf("api/bb/buy/vip/purchase?") !== -1) {
        body.data_body.in_duration = 99999
        body.data_body.purchased = 1
    }

    if(url.indexOf("api/activity/common/bb-user-category?") !== -1) {
        body.data_body.trial_collins = 1
        body.data_body.trial_wordroot = 1

        body.data_body.collins_vip.type = "purchased"
        body.data_body.collins_vip.expire_date = "2050-01-01"

        body.data_body.wordroot_vip.type = "purchased"
        body.data_body.wordroot_vip.expire_date = "2050-01-01"
    }

    // 派生串记
    if(url.indexOf("api/bb/buy/wordderive/purchase") !== -1) {
        body.data_body.purchase.coin_available = 10000 * 100
        body.data_body.purchase.coin_consumption = 29800
        body.data_body.purchase.coin_shortage = 0
        body.data_body.purchase.coin_value = 10000
        body.data_body.purchase.deduction_price = 298
        body.data_body.purchase.purchase_price = 0
    }
    if(url.indexOf("api/bb/buy/wordderive/purchase/update") !== -1) {}

    // collins
    if(url.indexOf("api/bb/buy/collins/purchase") !== -1) {
        body.data_body.tab1.products.forEach(prods => {
            prods.price = "1"
            prods.price_per_day = "每天 0 元"
            prods.price_in_coin = "100 酷币"
        })
    }

    if(url.indexOf("api/bb/buy/collins/purchase/update") !== -1) {
        body.data_body.purchase.coin_available = 10000 * 100
        body.data_body.purchase.coin_value = 10000
        body.data_body.purchase.coin_consumption = 0
        body.data_body.purchase.coin_shortage = 0

        body.data_body.purchase.current_price = 0
        body.data_body.purchase.current_price_in_coin = 0

        body.data_body.purchase.deduction_price = 0
        body.data_body.purchase.original_price = 0
        body.data_body.purchase.original_price_in_coin = 0
    }
    
}

body = JSON.stringify(body);
$done({
    body
});
