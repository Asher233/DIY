/***********************************

# > Lingvist hostname = api.lingvist.com
^https://api.lingvist.com/1.7/user/sync url script-response-body https://raw.githubusercontent.com/Asher233/DIY/main/Script/lv.js

***********************************/

const version = "1.0.0";
const name = "Lingvist";
console.log("Lingvist: " + version);

var body = $response.body;
var url = $request.url;

if (body) {
  var data = JSON.parse(body);
  const subscription = {
    status: "intro-trial",
    expiration_ts: "2222-10-18T02:52:03+00:00",
    trial_available: true,
    on_hold: false,
    trial_duration: "P14D",
  };
  data.subscription = subscription;
  $done({ body: JSON.stringify(data) });
} else {
  $done({});
}
