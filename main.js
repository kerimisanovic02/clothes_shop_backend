const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;

const { registerUser, loginUser ,getAllUsers ,updateProfile} = require("./controller/User.controller");
const { getAllProducts, saveProduct , saveProductImage ,getAllProductImages ,deleteProduct} = require("./controller/Product.controller");
const { getAllCategories ,saveCategory, deleteCategory} = require("./controller/Category.controller");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from node.js");
});

app.post("/user/register", registerUser);
app.post("/user/login", loginUser);
app.get("/user/all",getAllUsers)

app.get("/product/all", getAllProducts);
app.post("/product/save", saveProduct);
app.post("/product-image/save", saveProductImage);
app.get("/product-image/all/:id", getAllProductImages);
app.delete("/delete-product/:id" ,deleteProduct)


app.get("/category/all", getAllCategories);
app.post("/category/save", saveCategory);
app.delete("/category/delete/:id", deleteCategory)

app.put("/update/profile",updateProfile)

app.listen(PORT, () => {
  console.log(`App started on port: ${PORT}`);
});
