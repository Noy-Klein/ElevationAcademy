var shoppingCart = []; // array of products
/*
function gets item name and price and adds the item to the array
*/
function addToCart(itemName, itemPrice) {
  var item = {
    name: itemName,
    price: itemPrice
  };
  shoppingCart.push(item);
}
/*
function gets item name and checkes if the item is in the array.
if the item is in the array, returns the item price,
else print message.
*/
function priceCheck(itemName) {
  let rightItem = null;
  for (var i = 0; i < shoppingCart.length; i++) {
    if (itemName === shoppingCart[i].name) {
      // checkes if the item name is in the cart, if yes, we save the index.

      rightItem = i;
    }
  }
  if (rightItem !== null) {
    // upon any change we know there is the same item in the cart
    return shoppingCart[rightItem].price;
  } else {
    console.log("The searched item is not in the shoping cart array!");
  }
}
/*
summrize and prints the total price of all items in the cart
*/
function totalPriceCheck() {
  var total = 0;
  for (var j = 0; j < shoppingCart.length; j2++) {
    total = total + shoppingCart[j].price;
  }
  console.log(total);
}
