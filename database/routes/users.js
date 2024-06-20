var express = require('express');
var router = express.Router();

/* GET users listing. */
//localhost:3000/users/getuser
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;
