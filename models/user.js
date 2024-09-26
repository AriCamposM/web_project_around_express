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
        return /^(https?:\/\/)(www\.)?([a-zA-Z0-9._~:/?%#\[\]@!$&'()*+,;=-]+\/?)(#[a-zA-Z0-9._~:/?%#\[\]@!$&'()*+,;=-]*)?$/.test(value);
      },
     message: props => `${props.value} is not a valid url !`
    }
  }
});

module.exports = moongose.model( 'user', userSchema );