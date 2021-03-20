const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const db = require("./db")();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
const productsRouter = require("./routes/products");
const productCategoriesRouter = require("./routes/productCategories");
const productSubCategoriesRouter = require("./routes/productSubCategories");
app.use("/api/products", productsRouter);
app.use("/api/categories", productCategoriesRouter);
app.use("/api/sub-categories", productSubCategoriesRouter);

app.listen(8080, () => console.log("Port listening on 8080"));
