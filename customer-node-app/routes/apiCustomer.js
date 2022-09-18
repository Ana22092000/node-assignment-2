var express = require('express');
var app = express.Router();
const { getCustomer, getCustomerById, addCustomer, updateCustomer, deleteCustomer } = require('../services/customer-mysql');

app.get('/', async (req, res) => {
    res.send(await getCustomer());
})

app.get('/:id', async (req, res) => {
    let record = await getCustomerById(req.params.id);
    res.send(record);
})

app.post('/', async (req, res) => {
    var record = req.body;
    await addCustomer(record);
    res.send({ result: "Success", msg: "Customer added!" });
})

app.put('/', async (req, res) => {
    var record = req.body;
    await updateCustomer(record);
    res.send({ result: "Success", msg: "Customer updated!" });
})

app.delete('/', async (req, res) => {
    await deleteCustomer(req.body);
    res.send({ result: "Success", msg: "Customer deleted!" });
})

module.exports = app;
