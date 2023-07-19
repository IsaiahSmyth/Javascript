const users = require('../model/user.model');
const userController = require('../controllers/user.controller');


module.exports = app =>{
    app.get('/api', userController.Hello)

    app.get('/api/users', userController.allUsers);

    app.get('/api/users/:id', userController.oneUser);

    app.post('/api/users', userController.newUser);

    app.put('/api/users/:id', userController.updateUser);

    app.delete('/api/users/:id', userController.deleteUser)
}