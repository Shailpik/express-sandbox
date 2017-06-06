const userController = require('../controllers/users_controller');


module.exports = function (app) {
  app.get('/user', userController.userGet);
  app.get('/user/:id', userController.userGetId);
  app.post('/user', userController.userPost);
  app.put('/user/:id', userController.userUpdate);
  app.delete('/user/:id', userController.userDelete);
};
