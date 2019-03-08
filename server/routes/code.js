var express = require('express');
var router = express.Router();
let https = require('https');
const cheerio = require('cheerio')

router.get('/', function(req, res, next) {
  https.get('https://6qfaaa.axshare.com/#g=1&p=%E6%9E%84%E5%BB%BA%E7%BC%96%E8%AF%91', (response) => {
    var datas = '';
    // console.log(Object.keys(response))
    response.on('data', (d) => {
      datas += d;
    });
    response.setEncoding('utf8');
    response.on('end', function(data){
      console.log(datas);
      const $ = cheerio.load(datas);
      console.log($('#mainFrame'));
      // var buff = Buffer.concat(datas, size);
      res.send({data: ($('#mainFrame').options)});
      // var buff = Buffer.concat(datas, size);
      // var pic = buff.toString('base64');
      // callback({success:true, data:pic});
    });
  });
});


module.exports = router;
