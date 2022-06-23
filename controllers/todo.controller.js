const Todo = require('../database/schema/todo.schema');

const addTodo = async (req, res) => {
	const { body } = req;
	console.log(body);

	try {
		const doc = await Todo.create({
			title: body.title,
			value: body.value,
		});
		_(doc);

		res.status(200).json({
			status: 'Success',
			data: doc,
			message: 'Todo added successfully',
		});
	} catch (e) {
		console.log(e);
	}
};

const getTodo = async (req, res) => {
	try {
		// const docs = await Todo.find({ Todo });
		const docs = await Todo.find({ Todo });
		console.log(docs);
		res.status(200).json({
			message: 'data found',
			data: docs,
		});
	} catch (e) {
		console.log(e);
	}
};

const deleteTodo = async (req, res) => {
	const { id } = req;

	const del = await Todo.findByIdAndDelete(id);

	res.status(200).json({
		status: 'success',
		message: `Todo with id ${id} deleted Successfully`,
	});
};

const updateTodo = async (req, res) => {
	const { id } = req.query;
	const { body } = req;

	const todoUpdate = await Todo.findByIdAndUpdate(
		id,
		body,
		{ new: true },
	);
};

// * module export
module.exports = {
	addTodo,
	getTodo,
	deleteTodo,
};
