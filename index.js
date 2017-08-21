var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: 1531271799,
  channelSecret: 83173525e353a694ed7bd6844bf9ffa2,
  channelAccessToken: fyESf7iprdmZmUSOSjyxGLwFjlfn97n8UmAK05sRPQqLyDgFCd5bciX5Funf7iyZXMttQsDGulRJw2tIhb37e7tucUrgu8FC3s9RXGJ4Mfw5YdBQIcR6l9NXUJYq/mNJMD/kQAnD5I1ffCyA49z1SAdB04t89/1O/w1cDnyilFU=
});
bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});