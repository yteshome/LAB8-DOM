// adding items in an array
var groceryList = [
  {
    name: 'juice ',
    price: 3.99
  },
  {
    name: 'braad ',
    price: 2.75
  },

  {
    name: 'butter',
    price: 2.59
  },
  {
    name: 'cereal',
    price: 3.59,
  }
];

var total = 0;

groceryList.forEach(function(item){
// console.log(item.name);
// console.log(item.price.toFixed(2));
 console.log( item.name + ' is $ '+ item.price.toFixed(2));
 total += item.price;

});

console.log('Total b4 tax is $ ' + total.toFixed(2));

var tax = total * 0.06;
var grandTotal = total + tax;

console.log('6% sales tax is $  '+ tax.toFixed(2));
console.log(' grand total is $ ' + grandTotal.toFixed(2));

groceryList.push({name: 'steak', price: 7.99}),

console.log(groceryList);

groceryList.shift(0,2);
console.log(groceryList);
