
var groceryList = [
  { name: 'Apple ',
    qty: 2,
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

function addItem() {
  //info from forms
  var formProduct = document.getElementById('product').value;
  var formQuantity = parseFloat(document.getElementById('quantity').value);
  var formCost = parseFloat(document.getElementById('cost').value);

  //push info from form to array
  groceryList.push({
      name: formProduct,
      qty: formQuantity,
      price: formCost
    });

    //append to the page
    var list = document.getElementById('item');
    var listitem = document.createElement('li');

    listitem.innerText = formQuantity + '\xa0\xa0\xa0\xa0' + formProduct +'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+'each   $'  + formCost.toFixed(2) +'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+'$  ' + (formCost * formQuantity).toFixed(2);
    list.appendChild(listitem);

    //update total
    getTotal();
  }

  //add list to page from array
  groceryList.forEach(function(item){
    var list = document.getElementById('item');
    var listitem = document.createElement('li');
    listitem.innerText = item.qty + '\xa0\xa0\xa0\xa0' + item.name + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+'each   $'  + item.price.toFixed(2) + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+'$  ' + item.price * item.qty;
    list.appendChild(listitem);
  });

  //create elements and append them for the totals
  var text1 = document.createElement('p');
  wrapper.appendChild(text1);
  var text2 = document.createElement('p');
  wrapper.appendChild(text2);
  var text3 = document.createElement('p');
  wrapper.appendChild(text3);

  function getTotal() {
    var total = 0;

    //calculate total
    groceryList.forEach(function(item){
      total += item.price.toFixed(2) * item.qty;
    });
    //calculate tax/grand total
    var tax = total * 0.06;
    var grandTotal = total + tax;

    //update inner text
    text1.innerText = 'Total    ' + total.toFixed(2);
    text2.innerText = ' Tax   ' +  tax.toFixed(2);
    text3.innerText = 'Grand Total  ' +  grandTotal.toFixed(2);
  }
  getTotal();
