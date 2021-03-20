const express = require("express");
const router = express.Router();
const ProductSubCategories = require("../models/ProductSubCategories");

//GET All ProductsSubCategories
router.get("/", async (req, res) => {
	try {
		const productSubCategories = await ProductSubCategories.find();
		res.json({ productSubCategories });
	} catch (err) {
		res.status(500).json({ message: res.message });
	}
});

//POST Add ProductSubCategory
router.post("/", (req, res) => {
	const productSubCategories = new ProductSubCategories(req.body);
	console.log(req.body);
	const promise = productSubCategories.save();
	promise
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json({ message: err.message });
		});
});

//GET ProductSubCategory By Id

router.get("/:id", getProductSubCategoryById, (req, res) => {
	res.json(res.productSubCategory.subCategoryName);
});

//DELETE ProductSubCategory By Id

router.delete("/:id", getProductSubCategoryById, async (req, res) => {
	try {
		await res.productSubCategory.remove();
		res.json({ message: "Category Deleted" });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

//GET ProductSubCategoryId middleware
async function getProductSubCategoryById(req, res, next) {
	let productSubCategoryById;
	try {
		productSubCategoryById = await ProductSubCategories.findById(req.params.id);
		if (productSubCategoryById == null) {
			return res.status(404).json({ message: "Can not find Product" });
		}
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}

	res.productSubCategory = productSubCategoryById;
	next();
}

module.exports = router;
