const { default: mongoose } = require('mongoose');
const moongose = require('mongoose')

const cardSchema = new moongose.Schema({
  name:{
    type: String,
    required: true,
    minlength: 2,
    maxlength:30,
  },
  link:{
    type:String,
    required: true,
    validate:{
      validator: function(value){
        return /^(https?:\/\/)(www\.)?([A-Za-z0-9-]+\.)+[A-Za-z]{2,}\/([A-Za-z0-9._~:/?%#\[\]@!$&'()*+,;=]*)?(\#.*)?$/.test(value);
      },
     message: props => `${props.value} is not a valid url !`
    }
  },
  owner:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'user'
  },
  likes:{
    type:[mongoose.Schema.Types.ObjectId],
    default:[]
  },
  createdAt:{
    type: Date,
    default: Date.now
  },
})

module.exports = moongose.model( 'card', cardSchema );