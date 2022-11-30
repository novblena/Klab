const item = [ {name: 'Bike', price:100}, {name: 'TV', price:200}, 
{name: 'Album', price:10}, {name: 'Book', price:5},
 {name: 'Phone', price:500}, {name: 'Computer', price:1000}, ]


var filteredProducts = products.filter(product => product.price <= 5);
console.log(filteredProducts);

var filteredProducts = products.filter(product => product.price > 1000);
console.log(filteredProducts); 

var totalPrice = products.reduce((acc, product) => acc + product.price, 0);
console.log(totalPrice);

var filteredProducts = products.filter(product => product.price > 5);
var totalPrice = filteredProducts.reduce((acc, product) => acc + product.price, 0);
console.log(totalPrice);
