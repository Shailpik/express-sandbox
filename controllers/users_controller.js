const db = require('../models');

exports.userGet = function (req, res) {

  console.log(db.User.schema);

  db.User.findAll({
    where: req.query
  }).then(function (results) {
    console.log(JSON.stringify(results));
    res.json(results);
  }).catch(function (e) {
    console.error(e);
    res.status(400).json({ error: 'Bad input on get', code: 400  });
  });
};

exports.userGetId = function (req, res) {

  db.User.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (results) {
    console.log(results);
    if (results) {
      res.json(results);
    }    else {
      res.status(404).json({ error: 'User not found', code: 404  });
    }
  }).catch(function (e) { // Check error before printing out status number
    console.error(e);
    res.status(400).json({ error: 'Bad input on getid', code: 400  });
  });
};

exports.userPost =  function (req, res) {
  console.log(req.body);
  req.body.age += 2 ;
  db.User.create(req.body).then(function (results) {
    console.log(results);
    res.json(results);
  }).catch(function (e) {
    console.error(e);
    res.json(req.body);
    // res.status(400).json({ error: 'Bad input on post', code: 400  });
  });
};

exports.userUpdate =  function (req, res) {
  console.log(req.body);

  db.User.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(function (results) {
    if (results[0] > 0) {
      console.log(results);
      res.json({ message: 'Updated user id ' + req.params.id });
    }    else {
      res.status(404).json({ error: 'Invalid user id ' + req.params.id, code: 404 });
    }
  }).catch(function (e) {
    console.error(e);
    res.status(400).json({ error: 'Bad input on update', code: 400  });
  });
};

exports.userDelete =  function (req, res) {

  db.User.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (results) {
    if (results) {
      console.log(results);
      res.json({ message: 'Deleted user id ' + req.params.id });
    }    else {
      res.status(404).json({ error: 'Invalid user id ' + req.params.id, code: 404 });
    }
  }).catch(function (e) {
    console.error(e);
    res.status(400).json({ error: 'Bad input on delete', code: 400  });
  });
};
