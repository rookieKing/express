var express = require('express');
var app = express();
var multiparty = require('multiparty');
var bodyParser = require('body-parser');

app.use(express.static('../../vue/my-project/dist'));

app.use(bodyParser.json());

app.post('/server/file-upload', function (req, res) {
  //生成multiparty对象，并配置上传目标路径
  var form = new multiparty.Form({ uploadDir: './uploads/' });
  form.parse(req, function (err, fields, files) {
    console.log(err, files);
    res.send('Hello World!');
    // don't forget to delete all req.files when done 
  });
});

app.post('/server/api1/search', (req, res) => {
  console.log(req.body);
  res.send([
    { xx: 11, zz: 21 },
    { xx: 12, zz: 22 },
    { xx: 13, zz: 23 },
  ]);
});

app.get('/test', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
