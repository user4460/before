var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:userId', function (req, res, next) {
  var userId = req.params.userId; // パラメータの値を取得
  console.log('ユーザーID ' + userId + ' が指定されました。'); // ログで確認
  res.send('ok'); // 必ず何らかのResponseを返す必要がある
});

module.exports = router;
