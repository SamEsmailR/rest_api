/** @format */

const mongoose = require('mongoose');

mongoose
	.connect('mongodb+srv://aaaaaaaa:<aaaaaaaa>@cluster0.n0skm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('---------connected------------');
	})
	.catch((e) => {
		console.error(e);
	});
