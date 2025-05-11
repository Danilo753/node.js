async function getFullName(codeId, productName, price) {

    console.log (`Código do produto: ${codeId} \nNome do produto: ${productName} \nValor do produto: R$ ${price},00`)
    console.log("--------------------")
    
}

module.exports = {
    getFullName,
};
