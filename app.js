const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const chalk = require('chalk');
require('./database/connection');
const todoController = require('./controllers/todo.controller');
const { addTodo, getTodo, deleteTodo } = todoController;

// * configuring path of the .env file
dotenv.config({
	path: './config.env',
});
const { PORT } = process.env;
global.__ = console.log;
global._ = (_) => {
	__(chalk.blue(_));
};

const app = express();

// * middleware to parse body to Json
app.use(express.json());

app.use(
	cors({
		origin: '*',
	}),
);

// app.use((req, res, next) => {
// 	_(
// 		chalk.green(req.method, req.url),
// 		chalk.red(new Date().toLocaleDateString()),
// 	);
// 	next();
// });
// *===============================================
app.post('/', addTodo);
app.get('/', getTodo);
app.delete('/', deleteTodo);

// * server listening
app.listen(PORT, () => {
	_(`Server is running on port ${PORT}`);
});

// *=======================================================
// todo connect to database
// mongoose.connect(
// 	'mongodb+srv://saiema:321@saiema.djywdkl.mongodb.net/?retryWrites=true&w=majority',
// 	{
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	},
// );
// // todo start connection on
// mongoose.connection.on('open', () => {
// 	_('Connected to MongoDB');
// });
// `mongoose.connect(
// 	'mongodb+srv://saiema:321@saiema.djywdkl.mongodb.net/?retryWrites=true&w=majority',
// 	// DATABASE,
// 	{
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	},
// );
// mongoose.connection.on('open', () => {
// 	_('connected to mongoDB');
// });

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
