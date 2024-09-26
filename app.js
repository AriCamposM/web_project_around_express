const { PORT = 3000 } = process.env;
const express = require('express');
const app = express();

// MongoDB
const mongoose = require('mongoose');

//Moongose a la database
mongoose.connect('mongodb://localhost:27017/aroundb',{
  useNewUrlParser:true,
})
.then(() => {
  console.log('Conexión exitosa a aroundb');
})
.catch((error) => {
  console.error('Error conectando a MongoDB:', error);
});

// Aqui van los Routes
const users = require('./routes/users');
const cards = require('./routes/cards');

//Middleware para procesar solicitudes json
app.use(express.json())

// Middleware temporal para autorización temporal
app.use((req, res, next) => {
  req.user = {
    _id: '66f4ae082913c38501cede00'
  };

  next();
});

app.use('/',users)
app.use('/',cards)

// middleware para error 404
app.use(( req, res , next ) => {
  res.status(404).json({
    "message": "Recurso solicitado no encontrado"
  })
})


app.listen(PORT, () => {

  console.log(`The server is listening in the port http://localhost:${PORT}/`);

})