var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb+srv://lolita:2304@cluster0.cdhbp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
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
	
	unique_id: Number,
	nowa: Number,
	username: String,
	password: String,
	passwordConf: String
}),
rpg = new Schema( {
	
	unique_id: Number,
	nowa: Number,
	username: String,
	password: String,
	passwordConf: String
}),
User = mongoose.model('User', userSchema);
dbrpg = mongoose.model('rpg', rpg);

module.exports = User;
