const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductsSubCategoriesSchema = new Schema({
	categoryId: { type: Schema.Types.ObjectId, required: true },
	subCategoryName: { type: String, required: true },
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("sub-categories", ProductsSubCategoriesSchema);
