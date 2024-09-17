const { PORT = 3000 } = process.env;
const express = require('express');
const app = express();

// Aqui van los Routes
const users = require('./routes/users');
const cards = require('./routes/cards');

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