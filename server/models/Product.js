const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
	productName: { type: String, required: true },
	productUrl: String,
	productDescription: String,
	productImage: { type: String, default: "/logo.png" },
	productCategoryId: Number,
	productSubCategoryId: Number,
	productPrice: Number,
	productStock: Number,
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("products", ProductSchema);
