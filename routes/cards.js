const fs = require('node:fs');
const path = require('node:path');
const cards = require('express').Router();


//GET Para obtener el json de las tarjetasss
cards.get('/cards',(req , res) => {
  const filePath = path.join(__dirname,'../data/cards.json');
  fs.readFile(filePath,'utf-8', ( err, data ) => {
    if(err){
      console.log(`Error trying to read file of cards : ${err.message} `);
      res.status(500).json({ error:'Internal server error , unable to read file of cards'})
    };

    const cards = JSON.parse(data);

    res.json(cards);
  })
})

module.exports = cards;