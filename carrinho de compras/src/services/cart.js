async function addItem(userCard, item) {
    userCard.push(item);
}

async function deleteItem(userCard, name) {
    const index = userCard.findIndex((item) => item.name === name);
    if (index !== -1){
        userCard.splice(index, 1);
    }

    if(userCard[index].quantity > 1){
        userCard[index].quantity -= 1
    }
}

async function removeItem(userCard, index) {
    if (index >=0 && index < userCard.length){
    const remove = userCard.splice(index, 1);
    return remove;}
    
}

async function calculateTotal(userCard) {
    const result = userCard.reduce((total, item) => total + item.subtotal(), 0);
    console.log(` O valor total é: R$ ${result},00`);
}

async function displayCard(userCard) {
    console.log(`\n Shoppe cart list \n`);
    userCard.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | x${item.quantity} | Subtotal  R$ ${item.subtotal()},00`);
    });
}

export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displayCard
}