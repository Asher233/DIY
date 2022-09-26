/***********************************

# > Quizlet Plus v5.8（不要用第三方账号）hostname = api.quizlet.com
^https:\/\/api\.quizlet\.com\/3\.5\/users\/\d+\?perPage=\d+ - script-response-body https://raw.githubusercontent.com/cyubuchen/scripts/unlock/quizletPlus.js

***********************************/

var obj = JSON.parse($response.body);
obj.responses[0].models.user[0].type = 1;
$done({body: JSON.stringify(obj)});
