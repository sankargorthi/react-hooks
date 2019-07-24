var express = require('express');
var router = express.Router();

const users = [
  {
    id: 'atharva',
    name: 'Atharva'
  },
  {
    id: 'bhargava',
    name: 'Bhargava'
  },
  {
    id: 'chander',
    name: 'Chander'
  },
  {
    id: 'david',
    name: 'David'
  }
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

module.exports = router;
