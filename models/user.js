const moongose = require('mongoose');

const userSchema = new moongose.Schema({
  name:{
    type: String,
    required: true,
    minlength: 2,
    maxlength:30,
  },
  about:{
    type: String,
    required: true,
    minlength: 2,
    maxlength:30,
  },
  avatar:{
    type:String,
    required: true,
    validate:{
      validator: function(value){
        return /^(https?:\/\/)(www\.)?([A-Za-z0-9-]+\.)+[A-Za-z]{2,}\/([A-Za-z0-9._~:/?%#\[\]@!$&'()*+,;=]*)?(\#.*)?$/.test(value);
      },
     message: props => `${props.value} is not a valid url !`
    }
  }
});

module.exports = moongose.model( 'user', userSchema );