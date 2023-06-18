var express = require('express');
var router = express.Router();

let users = [
  {id: '1', name:'Stephanie'},
  {id: '2', name:'Marcus'},
  {id: '3', name:'Jessica'},
  {id: '4', name:'Robert'},
  {id: '5', name:'Julia'}
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

router.get('/:userId', function (req, res, next) {
  const foundUser = users.find(user => user.id === req.params.userId);
  return res
    .setHeader('Content-Type', 'application/json')
    .send(users);
});


router.post('/', function (req, res, next) {
  const user = { id: req.body.id, name: req.body.name };
  users.push(user);
  return res
    .setHeader('Content-Type', 'application/json')
    .status(201)
    .send(user);
});


module.exports = router;
