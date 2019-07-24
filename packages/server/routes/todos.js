var express = require("express");
var without = require("lodash/without");
var router = express.Router();

const todos = {
  atharva: ["Bananas 🍌", "Oranges 🍊", "Carrots 🥕"],
  bhargava: ["Bananas 🍌", "Oranges 🍊", "Carrots 🥕"],
  chander: ["Bananas 🍌", "Oranges 🍊", "Carrots 🥕"],
  david: ["Bananas 🍌", "Oranges 🍊", "Carrots 🥕"],
  emmanuel: ["Bananas 🍌", "Oranges 🍊", "Carrots 🥕"],
  faris: ["Bananas 🍌", "Oranges 🍊", "Carrots 🥕"]
};

router
  .route("/:user")
  .get(function(req, res) {
    res.json(todos[req.params.user]);
  })
  .put(function(req, res) {
    const {user} = req.params;
    const {item} = req.body;
    console.log(user, 'is adding', item);
    todos[user] = [...todos[user], item];
    res.sendStatus(200);
  })
  .delete(function(req, res) {
    const { user } = req.params;
    const { item } = req.body;
    console.log(user, 'is deleting', item);
    todos[user] = without(todos[user], item);
    res.sendStatus(200);
  });

module.exports = router;
