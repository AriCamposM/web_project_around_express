const card = require('../models/card');

module.exports.getCards = ( req, res ) => {
  card.find({})
  .then( cards => res.json(cards) )
  .catch( (res) => res.status(500).send({ message:'Error getting Cards', error: err.message}));
}


module.exports.createCard = ( req, res ) =>{
 const { name , link } = req.body;
 const owner = req.user._id;

 card.create( { name, link , owner} )
 .then( card => res.status(201).json(card))
 .catch( (err) => res.status(500).send({ message:'Error creating Card', error: err.message}));
}

module.exports.deleteCard = ( req, res ) =>{
 card.findByIdAndDelete(req.params.cardId)
 .then( card => {
  if(!card){
    return res.status(404).send({ message:'Card not found'})
  }
  res.send({ message:'Card Deleted Sucessfully'})
 })
 .catch( (err) => res.status(500).send({ message:'Error deleting Card', error: err.message }))
}

module.exports.likeCard = (req, res) => {
  card.findByIdAndUpdate( req.params.cardId, { $addToSet: { likes: req.user._id } }, { new: true },)
  .then(card => {
    if(!card){
      return res.status(404).json({ message:'Card was not found'});
    }
    res.status(200).json({ message:'Card Like Sucessfully'});
  })
  .catch(err => res.status(400).json({message:'Error liking Card', error:err.message}));
}

module.exports.dislikeCard = (req, res) => {
  card.findByIdAndUpdate( req.params.cardId,{ $pull: { likes: req.user._id } },{ new: true },)
  .then(card => {
    if(!card){
      return res.status(404).json({ message:'Card was not found'});
    }
    res.status(200).json({ message:'Card Dislike Sucessfully'});
  })
  .catch(err => res.status(400).json({message:'Error disliking Card', error:err.message}));
}