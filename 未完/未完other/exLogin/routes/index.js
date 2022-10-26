var express = require('express');
var router = express.Router();

/* GET home page. */
//router.getとは、GETメソッドでアクセスされたときに、
router.get('/', function (req, res, next) {
  //res.renderとは、viewsフォルダの中のindex.ejsをレンダリングするという意味
  res.render('index', { title: 'Express' });
});

module.exports = router;
