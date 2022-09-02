const { Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');


// eventually we can get into bcypt to hide the users password 


const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'You must supply an email address'],
    unique: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i
    // validate: {
    //   validator: function (v) {
    //     return /\d{3}-\d{3}-\d{4}/.test(v);
    //   },
    //   message: props => `${props.value} is not a valid phone number!`
    // },
  },
  password: {
    type: String,
    required: true
  },
  gamerTag: {
    type: String
  },
  faveConsole: {
    type: String
  },
  library: [{
    type: Schema.Types.ObjectId,
    ref: 'Library'
  }]
},
 
);

userSchema.pre('save', async function() {
  const hased_pass = await bcrypt.hash(this.password, 10);
  this.passweord =
  console.log('this gets printed first');
});

userSchema.methods.validatePass = async function (unencryted_password) {
  const valid_pass = await bcrypt.compare(unencryted_password, this.password);
  console.log('bcrpyt compare is hittin')
  return valid_pass;
}

const User = model('User', userSchema);

module.exports = User;