const user = require('../models/user')

module.exports.getUsers= ( req , res ) =>{
  user.find({})
  .then(users => res.json(users))
  .catch((err)=> res.status(500).send({ message: 'Error getting Users', error: err.message}));
}

module.exports.getUser = ( req , res ) =>{
  user.findById(req.params.userId)
  .then(user =>{
    if(!user){
      return res.status(404).send({ message:'User not found'});
    }
    res.json(user)
  })
  .catch((err)=> res.status(500).send({ message: 'Error finding User', error: err.message}));
}

module.exports.createUser = ( req , res ) =>{
  const { name, about, avatar } = req.body;

  user.create( { name, about, avatar } )
  .then(user => res.status(201).json(user))
  .catch((err) => res.status(400).send({ message:'Error creating User', error: err.message}));
}

module.exports.updateUser = ( req, res ) => {
  const { name, about} = req.body;
  user.findByIdAndUpdate(req.user._id, { name, about}, { new: true } )
  .then(user => {
    if(!user){
      return res.status(404).json({ message:'User not found'});
    }
    res.status(200).json(user);
  })
  .catch((err) => res.status(400).json({message:'Error updating User', error: err.message}));
}

module.exports.updateAvatar = ( req, res ) => {
  const { avatar } = req.body;
  user.findByIdAndUpdate(req.user._id, {avatar}, { new: true })
  .then(user => {
    if(!user){
      return res.status(404).json({ message:'User not found'});
    }
    res.status(200).json(user);
  })
  .catch(err => res.status(400).json({message:'Error updating Avatar', error:err.message}));
}
