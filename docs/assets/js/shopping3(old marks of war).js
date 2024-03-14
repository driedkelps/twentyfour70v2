


// global variables
var qtyElement = null;
var optionValue = null ;
var itemName = null;
var itemPrice = null;
var idvalue = 1
//var cartData = [];


// let addedCartItemsKey = JSON.parse(localStorage.getItem("addedCartItemsKey"));
//    let cartData = JSON.parse(localStorage.getItem("cartData"));

// load cart total
window.onload = function() {
    getCartData()
    updateCartTotal()
 }

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
function quantityChangeloop() {
var quantityInputs = document.getElementsByClassName("item-quantity")
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        console.log(input)
        input.addEventListener('change', quantityChange)
    }
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

//update shopping cart page
function updateCartTable() {
    var cartTable = document.getElementById('cart-table');  //<--- do I need this?
    var innercartTable = document.getElementsByClassName('cart-items');
    var newrow = document.getElementsByClassName("newitemrow");


    if (localStorage.getItem("realtimeCart") != undefined || null) {
        //console.log(cartData.length)
        realtimeCart = JSON.parse(window.localStorage.getItem("realtimeCart"))
        if (realtimeCart.length != 0) {
            result = true
        }
    }
    if (result = true) {
    let x = {}
    realtimeCart.forEach((x) => {
        createCartRow()
        }
    )}

replaceItemDetails1()
quantityChangeloop()
updateCartTotal()


// var newitemname = document.getElementById("newitemrow").getElementsByClassName("item-name")[0].innerText
// var newitemquantity = document.getElementById("newitemrow").getElementsByClassName("item-quantity")[0].defaultValue
// var newsubtotalPrice = document.getElementById("newitemrow").getElementsByClassName("subtotalPrice")[0].innerText
// newitemrowData = [newitemname, newitemquantity, newsubtotalPrice]
// realtimeCart = JSON.parse(window.localStorage.getItem("realtimeCart"))
// RTCpdt = realtimeCart.Product;
// RTCqty = realtimeCart.Quantity;
// RTCprice = realtimeCart.Price;



// var dataArray = Object.keys(realtimeCart).map(function(k){return realtimeCart[k]});
// console.log(dataArray)

function replaceItemDetails1() {
let cartlist = document.querySelectorAll(".newitemrow");
for (var i = 0, x = 0; i < realtimeCart.length, x < cartlist.length; i++, x++ ) {
    var RTCpdt = realtimeCart[i].Product;
    var RTCqty = realtimeCart[i].Quantity;
    var RTCprice = realtimeCart[i].Price;
    
    // var newitemname = getElementsByClassName("item-name")[0].innerText
    // var newitemquantity = getElementsByClassName("item-quantity")[0].defaultValue
    // var newsubtotalPrice = getElementsByClassName("subtotalPrice")[0].innerText
    document.getElementsByClassName("newitemrow")[x].getElementsByClassName("item-name")[0].innerText = RTCpdt;  //<-- FIGURE OUT HOW TO change these vals
    document.getElementsByClassName("newitemrow")[x].getElementsByClassName("item-quantity")[0].defaultValue = RTCqty;
    document.getElementsByClassName("newitemrow")[x].getElementsByClassName("subtotalPrice")[0].innerText = RTCprice;

    
}
}

//     for (var i = 0; i < realtimeCart.length; i++) {
//     innercartTable.innerHTML = realtimeCart.map((y) => {
//     let { Product, Quantity, Price } = y;
//     //     // entries = [Object.entries(realtimeCart)];
//     //     // var keyValue = y.setId(value);
//     let search = realtimeCart.find(y => y.Product === Product) || [];
//     let { newitemname, newitemquantity, newsubtotalPrice } = search;
//     console.log(search)
//     })    
//   }


// newitemname[i].innerText.replace('Premium White Banans', realtimeCart.Product); //<-- doesnt work lol,can't read "realtimeCart.Product"

//   newitemquantity.textContent = realtimeCart.Quantity;
//   cartTable.appendChild(newitemquantity);

//   newsubtotalPrice.textContent = realtimeCart.Price;
//   cartTable.appendChild(newsubtotalPrice);

    
}


//updating cart data loop test//
    // var pdtname = realtimeCart.map(x=> x.Product)
    // const insertpdtname = document.getElementById("newitemrow").getElementsByClassName("item-name").innerHTML
    // insertpdtname.appendChild(pdtname)
    // console.log(Product)
//keep for later//

    //    var td = tr.insertCell();
    //    td.innerHTML= "a";
   
    //    td = tr.insertCell();
    //    td.innerHTML= "b";
       
    //    td = tr.insertCell();
    //    td.innerHTML= "c";
       
    //    td = tr.insertCell();
    //    td.innerHTML= "d";
       
    //    td = tr.insertCell();
    //    td.innerHTML= "e";

//test update carttable
function createCartRow(event) {
    var startrow = document.getElementById("cart-inforow"); // find row to copy
    var cartTable = document.getElementById("cart-table"); // find table to append to
    var innercartTable = document.getElementsByClassName('cart-items');
    var clone = startrow.cloneNode(true); // copy children too
    incrementidvalue = idvalue++
    clone.id = "newitemrow" + incrementidvalue; // change id or other attributes/contents
    clone.classList.add("newitemrow")
    cartTable.appendChild(clone); // add new row to end of table
}
  



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
// end of shopping cart total //


    // var cartTable = document.getElementById('cart-table');
    // var newRow = cartTable.insertRow(-1);


     
// shopping cart total //
function updateCartTotal() {
    var cartRows = document.getElementsByClassName('cart-info')
    var quantityElement = document.getElementsByClassName("item-quantity")
    var priceElement = document.getElementsByClassName("subtotalPrice")
    var total = 0
    var qty;
    var totalsub = 0;
    var subtotal;
    var balance = document.getElementById("user-balance")

    for (var i = 0; i < cartRows.length; i++) {
        console.log(quantityElement[i].getAttribute('value'));
        qty = parseFloat(quantityElement[i].getAttribute('value'));

        subtotal = parseFloat(priceElement[i].innerText.replace('$',''));
        console.log(subtotal)
        
        totalsub = totalsub + (qty * subtotal)
        total = total + (qty * subtotal) //replace with total+ totalsub - discount
        console.log(total)
    }

    balancevalue = parseFloat(balance.innerText.replace('$',''))

    document.getElementsByClassName('cart-subtotal')[0].innerText = '$' + parseFloat(totalsub).toFixed(2)
    document.getElementsByClassName('cart-total')[0].innerText = '$' + parseFloat(total).toFixed(2)
    document.getElementsByClassName('cart-balance')[0].innerText = '$' + parseFloat(balancevalue - total).toFixed(2)

}



// add to cart :D - product page //
var btnItemQtyMinus = document.getElementById('minus')
var btnItemQtyPlus = document.getElementById('plus')
var addToCartBtn = document.getElementById('addCart')
var optionList = document.getElementById('optionList')
var productName = document.getElementsByClassName('productName')
var productPrice = document.getElementsByClassName('productPrice')

btnItemQtyMinus.addEventListener('click', function(event) {updateItemQty(event)});
btnItemQtyPlus.addEventListener('click', function(event){updateItemQty(event)});
addToCartBtn.addEventListener('click', function(event){addToCart(event)});

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

function getCartData() {
if (localStorage.getItem("realtimeCart") != undefined || null) {
    //console.log(cartData.length)
    realtimeCart = JSON.parse(window.localStorage.getItem("realtimeCart"))
    //console.log(JSON.parse(localStorage.getItem("realtimeCart")))

    //.includes(addedCartItems.Product))
    //(JSON.parse(realtimeCart)).includes(addedCartItems.Product) //<-- error here, how to parse?
    } else{
        realtimeCart = [];
    }
}

function addToCart(event) {
    getCartData()
    //event.setProperty(Cancelable, "false");
    console.log("add to cart btn called")
    qtyElement = document.getElementById('quant-no').getAttribute('value');
    console.log(qtyElement)

    // console.log(optionList.selectedOptions[0].value); //<-- removed selector option
    // optionValue = optionList.selectedOptions[0].value

    console.log(productName[0].innerText);
    itemName = productName[0].innerText
    
    console.log(productPrice[0].innerText)
    itemPrice = productPrice[0].innerText

    
    // var cartTable = document.getElementById('cart-table');
    // var newRow = cartTable.insertRow(-1)

var addedCartItems = {}
    addedCartItems.Product = itemName;
    // addedCartItems.Type = optionValue; //<-- removed selector option
    addedCartItems.Quantity = qtyElement;
    addedCartItems.Price = itemPrice;

    window.localStorage.setItem("addedCartItemsKey", JSON.stringify(addedCartItems)) ; //<-- don't think I need this later
    console.log(addedCartItems)

    cartData = addedCartItems
    // newArray = [];
    // newArray.push(addedCartItems)
    // console.log(newArray)
    
    var realtimeCVcheck = 0;
    for (var i = 0; i < realtimeCart.length; i++) {
        var realtimeCVcheck = realtimeCart.map(x=> x.Product)
        console.log(realtimeCVcheck)}


    if (realtimeCVcheck != 0) {
        if (realtimeCVcheck.includes(addedCartItems.Product) == true) {         
            alert("Item is already in cart!")
            return
            } else {
                window.localStorage.setItem("cartData", JSON.stringify(cartData))
                console.log(cartData)
            } 
    }
    else {
        window.localStorage.setItem("cartData", JSON.stringify(cartData))
        console.log(cartData)
    } 

        // cartData.concat(newArray)
        // window.localStorage.setItem("cartData", JSON.stringify(cartData))
    updateCartItems() 
    console.log(realtimeCart)

}


function updateCartItems() {
    cartData = JSON.parse(localStorage.getItem("cartData"))
    localStorage.setItem(realtimeCart, realtimeCart.push(cartData)) //<-- rmb to add back 'window.localstorage...'
    realtimeCart.flat(1)
    localStorage.setItem("realtimeCart", JSON.stringify(realtimeCart)) //<-- rmb to add back 'window.localstorage...'
    console.log("realtimeCart")
    
}




//maybe useful function, finds product details//
// const newArray = ['Product', 'Type', 'Quantity', 'Price'];
// function pick(addedCartItems, keys){
//     let result = {};
//     for(let i=0; i<keys.length; i++){
//         result[keys[i]] = obj[keys[i]];
//     }
//     return result;
// }
///////////////////////////////////////////////////////////////////////



    // var comb = cartData.push(newArray);
    // console.log(comb)
// 
    // window.localStorage.setItem("cartData", JSON.stringify(cartData))
    // console.log("cartData")


// if (cartData = undefined || null) {
// let cartData = JSON.parse(localStorage.getItem("addedCartItemsKey"));
// window.localStorage.setItem("cartData", JSON.stringify(cartData)) 
// }
    // window.localStorage.setItem(cartData, addedCartItems);
    // window.localStorage.setItem("cartData", JSON.stringify(cartData))


    // if(cartData.length == 0){
    //     cartData.push(addedCartItemsKey);



// function keyvalueCheck() {
//     let res = JSON.parse(cartData.find(cartData.Product == addedCartItems.Product))
//     if (res = undefined || null) {
//         window.localStorage.setItem("cartData", JSON.stringify(cartData));
//         console.log("cartData")
//         }else {
//         window.localStorage.setItem(cartData.Quantity++) ;
//             return
//         }  
// console.log('keyvalueCheck ran')
// }




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


