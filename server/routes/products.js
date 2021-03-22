const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

//GET All Products
router.get("/", async (req, res) => {
	try {
		const products = await Product.find();
		res.json({ products });
	} catch (err) {
		res.status(500).json({ message: res.message });
	}
});

//GET SubProducts

router.get("/sub/:id", async (req, res) => {
	const kapital = req.params.id;

	try {
		const products = await Product.find({
			productSubCategoryId: kapital,
		});
		res.json({ products });
	} catch (err) {
		res.status(500).json({ message: res.message });
	}
});

//POST Add Product
router.post("/", (req, res) => {
	const product = new Product(req.body);
	console.log(req.body);
	const promise = product.save();
	promise
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json({ message: err.message });
		});
});

//GET Product By Id

router.get("/:id", getProductById, (req, res) => {
	return res.json(res.product.productName);
});

//DETE Product By Id

router.delete("/:id", getProductById, async (req, res) => {
	try {
		await res.product.remove();
		res.json({ message: "Product Deleted" });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

//GET ProductID middleware
async function getProductById(req, res, next) {
	let productById;
	try {
		productById = await Product.findById(req.params.id);
		if (productById == null) {
			return res.status(404).json({ message: "Can not find Product" });
		}
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}

	res.product = productById;
	next();
}

module.exports = router;
