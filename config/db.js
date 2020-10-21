const mongoose = require('mongoose');


const URI = 'mongodb+srv://taskapp:taskapp1@taskappcluster.h2eur.mongodb.net/morning?retryWrites=true&w=majority'

const connectDB = async () => {
	try {
		await mongoose.connect(URI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});

		console.log('MongoDB Connected...');
	} catch (err) {
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;