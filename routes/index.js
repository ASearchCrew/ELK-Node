const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  console.log("이건 로그야 filebeat 야");
  console.log("이건 로그야 filebeat 야");
  console.log("이건 로그야 filebeat 야");
  console.log("이건 로그야 filebeat 야");
  console.log("이건 로그야 filebeat 야");
  console.log("이건 로그야 filebeat 야");
  console.log("이건 로그야 filebeat 야");
  console.log("이건 로그야 filebeat 야");
  console.log("이건 로그야 filebeat 야");
  console.log("이건 로그야 filebeat 야");
  console.log("이건 로그야 filebeat 야");
  console.log("이건 로그야 filebeat 야");
  console.log("이건 로그야 filebeat 야");
  console.log("이건 로그야 filebeat 야");
  console.log("이건 로그야 filebeat 야");
  console.log("이건 로그야 filebeat 야");
  console.log("이건 로그야 filebeat 야");

  return res.status(200).json({
      Test : "B",
      Sample : "C"
  })
});

module.exports = router;
