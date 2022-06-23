const mongoose = require('mongoose');
const { Schema } = mongoose;

// * todoSchema created
const todoSchema = new Schema({
	title: {
		type: String,
		required: [true, 'Please provide a title'],
	},
	value: {
		type: String,
		required: [true, 'Please provide a value'],
	},
	date: {
		type: Date,
		default: new Date().getDay(),
	},
});

//* Todo model created by using todoSchema
const Todo = mongoose.model('todo', todoSchema);
// const add = todo.create({
// 	title: 'lalit',
// 	value: 'value',
// });

// * Model exported
module.exports = Todo;
