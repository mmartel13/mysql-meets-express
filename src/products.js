
const mysql = require('mysql2'); //import my library(package)

//see credentials file for code that goes here

// const query = `SELECT * FROM Products`; //what were executing through the database

// connection.query(query, (err, results, fields) => {//something you ask of the database

//     if(err){ //the error refers to if there was an error connecting to the database, not the data within the database
//         console.log(err)
//     }

//     console.log(results) //when doing terminal here need to write node src/products.js in terminal bc it is a product file within the src file
// })

const getAllProducts = async () => {
    const query = `SELECT * FROM Products`;

    const [results, fields] = await connection.promise().query(query) //whatever query i'm doing next i'm not using a callback. instead i'm saying return a promise which is why we use .promise. a query in promise format returns an array. the return will be an array in the same order (err, results, fields). THIS IS A FUNCTION DOING THE SAME THING AS COMMENTED SECTION ABOVE IN A FUNCTION SO CAN CALL IT AT A LATER TIME. this query returns two elements as an array(results and fields)
    
    console.log(results);
    return results;
}

const createProduct = async (product) => {//specify product bc thats the table were inserting something into and want to be able to use the function later to be able to create more products(products are an object here)
    const insertQuery = `INSERT INTO Products (Description, SKU, UserId) VALUES ('${product.description}', '${product.sku}', ${product.userId})`//don't use quotes on product userId bc its a number use quotes for the other ones bc they are strings
    
    const [results, fields] = await connection.promise().query(insertQuery)

    console.log(results)

    return results

}

getAllProducts()

createProduct({ //this is calling function above
    description: "Megans new Product",
    sku: "Megan1234",
    userId: 1
});

connection.end();//closes database connection. If you do this you don't have to do ctrl C in the terminal. ALWAYS DO THIS INSTEAD OF DOING CTRL C.


