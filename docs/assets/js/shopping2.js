


// global variables
var qtyElement = null;
var optionValue = null ;
var itemName = null;
var itemPrice = null;



var removeCartItemButtons = document.getElementsByClassName('btn-danger')
console.log(removeCartItemButtons)
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
        updateCartTotal()
        console.log('clicked' )
    })
}
// quantity change in cart 
var quantityInputs = document.getElementsByClassName("item-quantity")
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        console.log(input)
        input.addEventListener('change', quantityChange)
    }

function quantityChange(event) {
    var input = event.target

    input.setAttribute('value', event.target.value)

    console.log(input.getAttribute('value'));


    if(isNaN(input.value)) {
        input.value = 5
    }
    updateCartTotal()
}

// shopping cart total //
function updateCart() {
    //  const cartItems = [cartData]
    //  var cartData = localStorage.getItem('addedCartItemsKey');
    // console.log(cartItems)
    // var cartTable = document.getElementById('cart-table');

// // get items from localStorage, or declare new one if not exist//
// let addedCartItems = localStorage.getItem("addedCartItemsKey") || '[]';
// menuItems = JSON.parse(addedCartItems); 
// // declare and add the new item//
// menuItems.push({ "name": addedCartItems[i].Product, "item-quantity":addedCartItems[i].Quantity , "subtotalPrice": addedCartItems[i].Price });
// localStorage.setItem("ProductsInCart", JSON.stringify(menuItems));
// console.log(menuItems)

 
//     useEffect(()=>{
//     function listenForStorage(event){
//         const item = localStorage.getItem('addedCartItemsKey')

//         if (event) {
//         var newRow = cartTable.insertRow(-1)
//         }
//         }
//         window.addEventListener('storage', listenForStorage)
//         return () => {
//         window.removeEventListener('storage', listenForStorage)
//         }
//     })
};
// end of shopping cart total //


    // var cartTable = document.getElementById('cart-table');
    // var newRow = cartTable.insertRow(-1);


window.onload = codeAddress
function codeAddress() {
    var cartsubtotal = document.getElementsByClassName('cart-subtotal')
    console.log(cartsubtotal)
    cartsubtotal.innerText("$150.00", 0)
    var carttotal = document.getElementsByClassName('cart-total')
    carttotal.innerText("$150.00", 0)
}
     

function updateCartTotal() {
    var cartRows = document.getElementsByClassName('cart-info')
    var quantityElement = document.getElementsByClassName("item-quantity")
    var priceElement = document.getElementsByClassName("subtotalPrice")
    var total = 0
    var qty;
    var subtotal;

    for (var i = 0; i < cartRows.length; i++) {
        console.log(quantityElement[i].getAttribute('value'));
        qty = parseFloat(quantityElement[i].getAttribute('value'));

        subtotal = parseFloat(priceElement[i].innerText.replace('$',''));
        console.log(subtotal)
        
        total = total + (qty * subtotal)
        console.log(total)
    }
    document.getElementsByClassName('cart-total')[0].innerText = '$' + parseFloat(total).toFixed(2)

}


// add to cart :D - product page
var btnItemQtyMinus = document.getElementById('minus')
var btnItemQtyPlus = document.getElementById('plus')
var addToCartBtn = document.getElementById('addCart')
var optionList = document.getElementById('optionList')
var productName = document.getElementsByClassName('productName')
var productPrice = document.getElementsByClassName('productPrice')

btnItemQtyMinus.addEventListener('click', function(event) {updateItemQty(event)});
btnItemQtyPlus.addEventListener('click', function(event){updateItemQty(event)});
addToCartBtn.addEventListener('click', function(event){addToCart(event)});


// function updateItemOption(event) {
//     var optionElement = optionList.selectedOptions[0].value;
    
// }



function updateItemQty(event) {
    var qtyElement = document.getElementById('quant-no')


    console.log("update item qty:", event.srcElement)
    if (event.srcElement.innerText == "+"){
        console.log("works")
        var qty = parseInt(qtyElement.getAttribute('value'))
        qty += 1;
        if (qty>7) {
            qtyElement.setAttribute("value", 7)
           
            alert("Don't be greedy!");
            return

        }
        qtyElement.setAttribute('value', qty)
        console.log(document.getElementById('quant-no').getAttribute('value'))


    }
    if (event.srcElement.innerText == "-"){
        console.log("works2")
        var qty = parseInt(qtyElement.getAttribute('value'))
        qty -= 1;
        if (qty<1) {
            qtyElement.setAttribute("value", 1)
           
            alert("Minimum quantity is 1!");
            return
        }

        qtyElement.setAttribute('value', qty)
        console.log(document.getElementById('quant-no').getAttribute('value'))
    }
}


function addToCart(event) {
    console.log("add to cart btn called")
    qtyElement = document.getElementById('quant-no').getAttribute('value');
    console.log(qtyElement)

    console.log(optionList.selectedOptions[0].value);
    optionValue = optionList.selectedOptions[0].value

    console.log(productName[0].innerText);
    itemName = productName[0].innerText
    
    console.log(productPrice[0].innerText)
    itemPrice = productPrice[0].innerText

    
    // var cartTable = document.getElementById('cart-table');
    // var newRow = cartTable.insertRow(-1)

    var addedCartItems = {}
    addedCartItems.Product = itemName;
    addedCartItems.Type = optionValue;
    addedCartItems.Quantity = qtyElement;
    addedCartItems.Price = itemPrice;

window.localStorage.setItem("addedCartItemsKey", JSON.stringify(addedCartItems))
console.log( JSON.parse(localStorage.getItem('addedCartItemsKey')))

}


// var addedCartItems = {}
// addedCartItems.Product = itemName;
// addedCartItems.Type = optionValue;
// addedCartItems.Quantity = qtyElement;
// addedCartItems.Price = itemPrice;

// console.log(addedCartItems);
// localStorage.setItem('addedCartItemsKey', JSON.stringify(addedCartItems)) ; 
    


//shelved for now //
// if (qtyElement && optionValue && itemName) {
    
// }








// dont need this //
// var i = 1;
// 		document.getElementById("plus").onclick = function() {
//         i++;
//         document.getElementById('quant-no').value = i;
//     if (i>7){
//         document.getElementById('quant-no').disabled = false;
//         document.getElementById('quant-no').value = 7;
//         alert("Don't be greedy!");
//     }}
    
//     var i = 1;
// 		document.getElementById("minus").onclick = function() {
//         i--;
//         document.getElementById('quant-no').value = i;
//     if (i<1){
//         document.getElementById('quant-no').disabled = false;
//         document.getElementById('quant-no').value = 1;
//         alert("Minimum quantity is 1!");
//     }}


