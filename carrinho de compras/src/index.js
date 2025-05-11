import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";
const myCart = [];
const myWhishList = [];

const item1 = await createItem("camisa", 15, 2)
const item2 = await createItem("cueca", 10, 10)

cartService.addItem(myCart, item1);
cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, 1)

 await cartService.displayCard(myCart);


// await cartService.deleteItem(myCart, item1.name)


await cartService.calculateTotal(myCart);

