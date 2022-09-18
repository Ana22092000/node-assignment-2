var customers = [
    { id: 1, name: "Ana", email: "test@gmail.com", phone: "555555555", address: "smth", city: 'Tbilisi' },
    { id: 2, name: "John", email: "smith@gmail.com", phone: "555888888", address: "tst", city: 'New-york' },
]

const getCustomer = () => (customers);

const addCustomer = (customer) => {
    customer.id = Date.now();
    customers.push(customer);
};

const updateCustomer = (customer) => {
    customers.map((record, index) => {
        if (record.id == customer.id) {
            customers[index] = customer;
        }
    })
};

const deleteCustomer = (customer) => {
    let temp = customers.filter((record) => (record.id != customer.id))
    customers = temp;
};

const getCustomerById = (id) => {
    let temp = customers.filter((record) => (record.id == id))
    return temp[0];
};

module.exports = { getCustomer, addCustomer, updateCustomer, deleteCustomer, getCustomerById };