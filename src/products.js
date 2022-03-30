
const mysql = require('mysql2'); 

const query = `SELECT * FROM Products`; 

connection.query(query, (err, results, fields) => {

    if(err){ 
         console.log(err)
     }
     console.log(results) 
 })


const getAllProducts = async () => {
    const query = `SELECT * FROM Products`;

    const [results, fields] = await connection.promise().query(query) 
    
    console.log(results);
    return results;
}

const createProduct = async (product) => {
    const insertQuery = `INSERT INTO Products (Description, SKU, UserId) VALUES ('${product.description}', '${product.sku}', ${product.userId})`
    
    const [results, fields] = await connection.promise().query(insertQuery)

    console.log(results)

    return results

}

getAllProducts()


createProduct({ 
    description: "Megans new Product",
    sku: "Megan1234",
    userId: 1
});

connection.end();


