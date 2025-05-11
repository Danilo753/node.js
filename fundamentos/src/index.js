const product = require ("./services/products")

async function printProduct() {
    console.log ("Carrinho de compras: ")
    console.log ("-----------------------------")
    
    product.getFullName("23", "Teclado","150")
    product.getFullName("58", "Mouse", "58")
    product.getFullName("100", "Monitor", "899")
    
};

printProduct();