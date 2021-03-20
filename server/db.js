const mongoose = require("mongoose");
require("dotenv").config();

module.exports = () => {
	mongoose
		.connect(process.env.DATABASE_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => {
			console.log("DB bağlantısı başarılı");
		})
		.catch((err) => {
			console.log(err, "DB bağlantı hatası");
		});
	mongoose.Promise = global.Promise;
};
