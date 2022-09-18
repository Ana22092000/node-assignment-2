var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 20,
    host: 'localhost',
    user: 'root',
    password: 'paroLi777@',
    database: 'nodejs'
});

const getProduct = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * from product', function (error, results, fields) {
            if (error) {
                resolve([]);
                throw error;
            } else {
                resolve(results);
            }
        });
    })
}


const addProduct = function (product) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) { console.log(err); resolve({ result: "fail" }); return; }
            connection.query("INSERT INTO product set ? ", product, function (err, results) {
                if (err) {
                    console.log("Error Selecting : %s ", err);
                    resolve({ result: "fail" });
                } else {
                    resolve({ result: "success" });
                }
                connection.release();
            });
        });
    });
};


const updateProduct = function (product) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) { console.log(err); resolve({ result: "fail" }); return; }
            connection.query("UPDATE product set ? WHERE id = ? ", [product, product.id], function (err, results) {
                if (err) {
                    console.log("Error Selecting : %s ", err);
                    resolve({ result: "fail" });
                } else {
                    resolve({ result: "ok" });
                }
            });
        });
    });
};

const deleteProduct = function ({ id }) {
    return new Promise((resolve, reject) => {
        var sql = "delete FROM product where id='" + id + "'";
        console.log("sql:" + sql);
        pool.getConnection(function (err, connection) {
            if (err) { console.log(err); resolve({ result: "ok" }); }
            // make the query
            connection.query(sql, function (err, results) {
                connection.release();
                if (err) { console.log(err); resolve({ result: "ok" }); }
                resolve({ result: "ok" });
            });
        });
    });
};
const getProductById = function (id) {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * from product where id=' + id, function (error, results, fields) {
            if (error) {
                resolve({});
                throw error;
            } else {
                if (results.length == 0) {
                    callback({});
                } else {
                    resolve(results[0]);
                }
            }
        });
    });
};

const getProductsBySearch = function (field, searchText) {
    var recordList = [];
    var sql = "SELECT * FROM product where " + field + " like '%" + searchText + "%'";
    console.log("sql: " + sql);
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                console.log(err);
                resolve({});
                return;
            }
            // make the query
            connection.query(sql, function (err, results) {
                connection.release();
                if (err) {
                    console.log(err);
                    resolve({});
                    return;
                }
                if (results.length == 0) {
                    resolve(recordList);
                } else {
                    resolve(results);
                }
            })
        })
    })
}

module.exports = { getProduct, addProduct, updateProduct, deleteProduct, getProductById, getProductsBySearch };
