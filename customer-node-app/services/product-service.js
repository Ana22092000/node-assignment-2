var products = [
    { id: 1, name: "Prod1", company: "Tst", code: "5998", date: "22/05/2009", city: 'London', country: 'England' },
    { id: 2, name: "Prod2", company: "Smth", code: "6978", date: "27/06/2005", city: 'Paris', country: 'France' },
]

const getProduct = () => (products);

const addProduct = (product) => {
    product.id = Date.now();
    products.push(product);
};

const updateProduct = (product) => {
    products.map((record, index) => {
        if (record.id == product.id) {
            products[index] = product;
        }
    })
};

const deleteProduct = (product) => {
    let temp = products.filter((record) => (record.id != product.id))
    products = temp;
};

const getProductById = (id) => {
    let temp = products.filter((record) => (record.id == id))
    return temp[0];
};

module.exports = { getProduct, addProduct, updateProduct, deleteProduct, getProductById };