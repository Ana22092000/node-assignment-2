var express = require('express');
var app = express.Router();
const { getProduct, getProductById, addProduct, updateProduct, deleteProduct } = require('../services/product-mysql');

app.get('/', async (req, res) => {
    res.send(await getProduct());
})

app.get('/:id', async (req, res) => {
    let record = await getProductById(req.params.id);
    res.send(record);
})

app.post('/', async (req, res) => {
    var record = req.body;
    await addProduct(record);
    res.send({ result: "Success", msg: "Product added!" });
})

app.put('/', async (req, res) => {
    var record = req.body;
    await updateProduct(record);
    res.send({ result: "Success", msg: "Product updated!" });
})

app.delete('/', async (req, res) => {
    await deleteProduct(req.body);
    res.send({ result: "Success", msg: "Product deleted!" });
})

module.exports = app;
