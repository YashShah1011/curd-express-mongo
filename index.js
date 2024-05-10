const express = require("express");
const app = express();
const Product = require("./models/product.model");
const mongoose = require("mongoose");


app.listen(3000, () => {
    console.log("Server started on port 3000")
});

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/products", require("./routes/product.route"))

mongoose.connect("mongodb+srv://yshah0665:vdbsWXPAyaqRVtP6@curddb.nhjgh8y.mongodb.net/Node-API?retryWrites=true&w=majority&appName=CurdDB")
.then(() => {
    console.log("MongoDB connected")
})
.catch((err) => {
    console.log(err)
})
