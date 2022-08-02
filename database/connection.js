const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({
	path: './config.env',
});
const { DATABASE, KEY } = process.env;
console.log(process.env.DATABASE);

mongoose.connect(
	DATABASE,
	// `mongodb+srv://saiema:${KEY}@saiema.djywdkl.mongodb.net/?retryWrites=true&w=majority`,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
);

mongoose.connection.on('open', () => {
	_("--->> Connected to mongoDB");
});

mongoose.connection.on('error', () => {
	_('Error in Connection');
});

// const user = new mongoose.Schema({
// 	name: String,
// 	email: String,
// });

// const userModel = mongoose.model('USER', user);
// const lalit = {
// 	name: 'Lalit Thakur',
// 	email: 'lalitthakur@gmail.com',
// };
// userModel.create(lalit);
// console.log('hello');
