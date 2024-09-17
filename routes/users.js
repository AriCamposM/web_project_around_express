const fs = require('node:fs');
const path = require('node:path');
const users = require('express').Router();


//GET Para obtener el json de los usuarios

users.get('/users',( req ,res ) => {
  const filePath = path.join(__dirname,'../data/users.json')
  fs.readFile(filePath,'utf-8',( err, data) => {
    if (err){
      console.log(`Error trying to read file of users : ${err.message}`);
      return res.status(500).json({error: 'Internal server error , unable to read file of users'});
    };

    const users = JSON.parse(data);
    res.json(users)

  })
})

//Middleware para verirficar a los usuarios existentes y no existentes
const UserVerification = (req, res, next) => {
  const filePath = path.join(__dirname,'../data/users.json')

  fs.readFile(filePath,'utf-8',( err, data) => {
    if (err){
      console.log(`Error trying to read file : ${err}`);
      return res.status(500).json({error: 'Error trying to read file of users'});
    };
    const users = JSON.parse(data);
    const _id = req.params._id

    const user = users.find(user => user._id === _id);

    if(user){
      req.user = user; // pasamos la petición si existe el usuario
      next();
    }else{
      return res.status(404).json({ message: 'ID de usuario no encontrado'});
    }
  })
}


//GET Para obtener un usuario utilizando el middleware para comprobar si existe
users.get('/users/:_id', UserVerification, ( req, res) => {
  res.json(req.user); // Como existe el usuario solo mandamos la respuesta con el JSON del usuario solicitado
})

module.exports = users;