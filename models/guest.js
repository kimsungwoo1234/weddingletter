// // grab the things we need
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// // create a schema
// var userSchema = new Schema({
//   name: String,
//   username: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   admin: Boolean,
//   location: String,
//   meta: {
//     age: Number,
//     website: String
//   },
//   created_at: Date,
//   updated_at: Date
// });

// // the schema is useless so far
// // we need to create a model using it
// var User = mongoose.model('User', userSchema);

// // make this available to our users in our Node applications
// module.exports = User;

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var GuestSchema   = new Schema({
    name: String,
    content: String,
    password: String,
    created_at: { type : Date, default: getTimeKST }    
});



function getTimeKST() { // 24시간제
  var now = new Date();
  var tz = now.getTime() - (now.getTimezoneOffset() * 60000);
  now.setTime(tz);


  return now;
}

module.exports = mongoose.model('Guest', GuestSchema);