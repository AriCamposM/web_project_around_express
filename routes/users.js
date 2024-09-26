const users = require('express').Router();
const { getUsers, getUser, createUser, updateUser, updateAvatar } = require('../controllers/users');


//GET Para obtener el json de los Usuarios
users.get('/users', getUsers);

//GET Para obtener el json de un Usuario especifico
users.get('/users/:userId', getUser);

//POST Para crear un Usuario
users.post('/users',createUser);

//PATCH Para actualizar un Usuario
users.patch('/users/me', updateUser);

//PATCH Para actualizar el Avatar
users.patch('/users/me/avatar', updateAvatar);

module.exports = users;