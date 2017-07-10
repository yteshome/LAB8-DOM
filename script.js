var groceryList = [
  { name: 'Juice ',
    qty: 1,
    price: 3.99},

  {name: 'Braad ',
    qty: 2,
    price: 2.99},

  {name: 'Butter',
    qty: 4,
    price: 2.59 },

  {name: 'Cereal',
    qty: 3,
    price: 3.59,}
];

var total = 0;

groceryList.forEach(function(item){
  var listitem = document.createElement('ul');
  listitem.innerText = item.qty + '      ' + item.name + '   each      $ '+ item.price.toFixed(2) + '   costs ...........................              $  ' + item.price * item.qty;
  document.body.appendChild(listitem);

 total += item.price.toFixed(2) * item.qty;
});

var tax = total * 0.06;
var grandTotal = total + tax;

var text1 = document.createElement('p');
  text1.innerText = 'Sub Total    ' + total.toFixed(2);
  document.body.appendChild(text1);

var text2 = document.createElement('p');
  text2.innerText = ' Sales Tax   ' +  tax.toFixed(2);
  document.body.appendChild(text2);

var text3 = document.createElement('p');
  text3.innerText = 'Grand Total  ' +  grandTotal.toFixed(2);
  document.body.appendChild(text3);





// // console.log('Total b4 tax is $ ' + total.toFixed(2));
//
// var tax = total * 0.06;
// var grandTotal = total + tax;
//
// console.log('6% sales tax is $  '+ tax.toFixed(2));
// console.log(' grand total is $ ' + grandTotal.toFixed(2));
//
// groceryList.push({name: 'Tea bags', qty: 2, price: 7.99}),
//
// console.log(groceryList);
//
// groceryList.shift(0,2);
// console.log(groceryList);
