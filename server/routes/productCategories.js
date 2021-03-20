const express = require("express");
const router = express.Router();
const ProductCategories = require("../models/ProductCategories");

//GET All ProductsCategories
router.get("/", async (req, res) => {
	try {
		const productCategories = await ProductCategories.find();
		res.json({ productCategories });
	} catch (err) {
		res.status(500).json({ message: res.message });
	}
});

//POST Add ProductCategories
router.post("/", (req, res) => {
	const productCategories = new ProductCategories(req.body);
	console.log(req.body);
	const promise = productCategories.save();
	promise
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json({ message: err.message });
		});
});

//GET ProductCategories By Id

router.get("/:id", getProductCategoryById, (req, res) => {
	res.json(res.productCategory.categoryName);
});

//DELETE ProductCategories By Id

router.delete("/:id", getProductCategoryById, async (req, res) => {
	try {
		await res.productCategory.remove();
		res.json({ message: "Category Deleted" });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

//GET ProductsCategoriesId middleware
async function getProductCategoryById(req, res, next) {
	let productCategoryById;
	try {
		productCategoryById = await ProductCategories.findById(req.params.id);
		if (productCategoryById == null) {
			return res.status(404).json({ message: "Can not find Product" });
		}
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}

	res.productCategory = productCategoryById;
	next();
}

module.exports = router;
