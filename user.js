var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb+srv://lolita:2304@cluster0.cdhbp.mongodb.net/dbs1?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (!err) {
    console.log('MongoDB Connection Succeeded.');
  } else {
    console.log('Error in DB connection : ' + err);
  }
});
userSchema = new Schema( {
	id: Number,
	serial: String
	name: String,
	heal: Number,
	potion: Number,
	crystal: Number,
	uang: Number,
	rplimit: Number
}),
User = mongoose.model('User', userSchema);

module.exports = User;
