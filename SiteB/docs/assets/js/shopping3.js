

// global variables
var qtyElement = null;
var optionValue = null ;
var itemName = null;
var itemPrice = null;
var idvalue = 1
localStorage.setItem("HeartTicker", "A");
var balance = 24.70; // starting balance



//var cartData = [];
// let addedCartItemsKey = JSON.parse(localStorage.getItem("addedCartItemsKey"));
//    let cartData = JSON.parse(localStorage.getItem("cartData"));


// load cart total
window.onload = function() {
    pageTimer()
    captureTimer()
    getBalance()
    getCartData()
    updateCartQty()
    updateCartTable()
    updateCartTotal()
 }

// page timer
function pageTimer() {
    var sec = 0;
    tmpSec = localStorage.getItem('secs')
    if (tmpSec != null) {
      sec = parseInt(tmpSec,10);
    }
    function pad ( val ) { return val > 9 ? val : "0" + val; }
    setInterval( function(){
      ++sec
      localStorage.setItem('secs', sec)
      document.getElementById("seconds").innerHTML=pad(sec%60);
      document.getElementById("minutes").innerHTML=pad(parseInt(sec/60%60,10));
      document.getElementById("hours").innerHTML=pad(parseInt(sec/3600%60,10));
    }, 1000);
}

function captureTimer() {
    if (window.location.href == "https://driedkelps.github.io/twentyfour70v2/SiteB/checkout.html") {
        tmpSec = localStorage.getItem('secs')
        sec = parseInt(tmpSec,10);
        localStorage.setItem('TimeAtCheckout', sec) 
        displayCheckoutTime()
        unpackFinalCartData()
    }else{
        return
    }

}


function getBalance() {
    if (JSON.parse(localStorage.getItem("userbalance")) != undefined || null) {
        balance = JSON.parse(localStorage.getItem("userbalance"));
        balance = parseFloat(balance).toFixed(2)
        document.getElementById("user-balance").innerText = ('$' + balance)
        }else {
            //balance = (balance).toFixed(2)
            document.getElementById("user-balance").innerText = ('$' + balance.toFixed(2))
            window.localStorage.setItem("userbalance", JSON.stringify(balance))}
}

// rating/Likes function - click instance
let ratingChange = function(icon){
    findId = icon.id
    icon.classList.toggle("fa-solid");
    LikesDecoration()
}

function updateRatingCount(event) {
    //var ratingItemName = 
    var ratingBtn = document.getElementsByClassName("fa-regular");
    if (localStorage.getItem("HeartTicker") == "A") {
    //ratingBtn.addEventListener('mouse', ratingChange)
        for (var y = 0; y < productimg.length; y++ ) {
        var idcheck = (productimg[y].id == findId) //.getAttribute("id")
            if ((idcheck) == true) {
            if (localStorage.getItem("productimg"+[y]) != undefined || null) {
                idcheckresult = localStorage.getItem("productimg"+[y])
                result = parseInt(idcheckresult) +1
                localStorage.setItem("productimg"+[y], result)
                //console.log(result); 

            } else {
                idcheckresult = productimg[y].Likes
                result = parseInt(idcheckresult) +1
                localStorage.setItem("productimg"+[y], result)
                //console.log(result);
                }
        }
    }
    LikesDecoration()
    // bonus for liking items
    HeartTicker = localStorage.getItem("HeartTicker");
    balance = JSON.parse(localStorage.getItem("userbalance"));
    balance = parseFloat(balance)
    likeBonus = 0.00
    if (localStorage.getItem("Likecount") == undefined || null) {
            let count = 0; 
        if (HeartTicker == "A") {
        count++
        localStorage.setItem("HeartTicker", "B");
            } if (count >= 5){
            balance = balance+likeBonus
            balance = parseFloat(balance)
            //balance = parseFloat(balance).toFixed(1)
            window.localStorage.setItem("userbalance", JSON.stringify(balance))
            getBalance()
            window.localStorage.setItem("Likecount", JSON.stringify(count))
            console.log("ok")
            }else {
            window.localStorage.setItem("Likecount", JSON.stringify(count))
            } 
      
///////////
    }else {
        count = JSON.parse(localStorage.getItem("Likecount"))
        if (HeartTicker == "A") {
            count++
            localStorage.setItem("HeartTicker", "B");
            } if (count >= 5){
            balance = balance+likeBonus
            balance = parseFloat(balance)
            //balance = parseFloat(balance).toFixed(1)
            window.localStorage.setItem("userbalance", JSON.stringify(balance))
            getBalance()
            window.localStorage.setItem("Likecount", JSON.stringify(count))
            console.log("ok2")
            }else {
            window.localStorage.setItem("Likecount", JSON.stringify(count))
        }
    }
//////////
}else {
    localStorage.setItem("HeartTicker", "A")    
        return
    }
}

let LikesDecoration = function(event) {
    if (localStorage.getItem("HeartTicker") == "A") {
    var result1 = localStorage.getItem("productimg0") || productimg[0].Likes;
    htmlp1 = document.querySelectorAll(".p1")
    htmlp1.forEach(p1 => { p1.textContent = " "; });
    var result2 = localStorage.getItem("productimg1") || productimg[1].Likes;
    htmlp2 = document.querySelectorAll(".p2")
    htmlp2.forEach(p2 => { p2.textContent = " "; });
    var result3 = localStorage.getItem("productimg2") || productimg[2].Likes;
    htmlp3 = document.querySelectorAll(".p3")
    htmlp3.forEach(p3 => { p3.textContent = " "; });
    var result4 = localStorage.getItem("productimg3") || productimg[3].Likes;
    htmlp4 = document.querySelectorAll(".p4")
    htmlp4.forEach(p4 => { p4.textContent = " "; });
    var result5 = localStorage.getItem("productimg4") ||productimg[4].Likes;
    htmlp5 = document.querySelectorAll(".p5")
    htmlp5.forEach(p5 => { p5.textContent = " "; });

    var result6 = localStorage.getItem("productimg5") || productimg[5].Likes;
    htmlp6 = document.querySelectorAll(".p6")
    htmlp6.forEach(p6 => { p6.textContent = " "; });
    var result7 = localStorage.getItem("productimg6") || productimg[6].Likes;
    htmlp7 = document.querySelectorAll(".p7")
    htmlp7.forEach(p7 => { p7.textContent = " "; });
    var result8 = localStorage.getItem("productimg7") || productimg[7].Likes;
    htmlp8 = document.querySelectorAll(".p8")
    htmlp8.forEach(p8 => { p8.textContent = " "; });
    var result9 = localStorage.getItem("productimg8") || productimg[8].Likes;
    htmlp9 = document.querySelectorAll(".p9")
    htmlp9.forEach(p9 => { p9.textContent = " "; });
    var result10 = localStorage.getItem("productimg9") ||productimg[9].Likes;
    htmlp10 = document.querySelectorAll(".p10")
    htmlp10.forEach(p10 => { p10.textContent = " "; });
    var result11 = localStorage.getItem("productimg10") ||productimg[10].Likes;
    htmlp11 = document.querySelectorAll(".p11")
    htmlp11.forEach(p11 => { p11.textContent = " "; });
    var result12 = localStorage.getItem("productimg11") ||productimg[11].Likes;
    htmlp12 = document.querySelectorAll(".p12")
    htmlp12.forEach(p12 => { p12.textContent = " "; });
    var result13 = localStorage.getItem("productimg12") ||productimg[12].Likes;
    htmlp13 = document.querySelectorAll(".p13")
    htmlp13.forEach(p13 => { p13.textContent = " "; });
    var result14 = localStorage.getItem("productimg13") ||productimg[13].Likes;
    htmlp14 = document.querySelectorAll(".p14")
    htmlp14.forEach(p14 => { p14.textContent = " "; });
    var result15 = localStorage.getItem("productimg14") ||productimg[14].Likes;
    htmlp15 = document.querySelectorAll(".p15")
    htmlp15.forEach(p15 => { p15.textContent = " "; });
    var result16 = localStorage.getItem("productimg15") ||productimg[15].Likes;
    htmlp16 = document.querySelectorAll(".p16")
    htmlp16.forEach(p16 => { p16.textContent = " "; });
    var result17 = localStorage.getItem("productimg16") ||productimg[16].Likes;
    htmlp17 = document.querySelectorAll(".p17")
    htmlp17.forEach(p17 => { p17.textContent = " "; });
    var result18 = localStorage.getItem("productimg17") ||productimg[17].Likes;
    htmlp18 = document.querySelectorAll(".p18")
    htmlp18.forEach(p18 => { p18.textContent = " "; });
    var result19 = localStorage.getItem("productimg18") ||productimg[18].Likes;
    htmlp19 = document.querySelectorAll(".p19")
    htmlp19.forEach(p19 => { p19.textContent = " "; });
    var result20 = localStorage.getItem("productimg19") ||productimg[19].Likes;
    htmlp20 = document.querySelectorAll(".p20")
    htmlp20.forEach(p20 => { p20.textContent = " "; });
    var result21 = localStorage.getItem("productimg20") ||productimg[20].Likes;
    htmlp21 = document.querySelectorAll(".p21")
    htmlp21.forEach(p21 => { p21.textContent = " "; });
    var result22 = localStorage.getItem("productimg21") ||productimg[21].Likes;
    htmlp22 = document.querySelectorAll(".p22")
    htmlp22.forEach(p22 => { p22.textContent = " "; });
    var result23 = localStorage.getItem("productimg22") ||productimg[22].Likes;
    htmlp23 = document.querySelectorAll(".p23")
    htmlp23.forEach(p23 => { p23.textContent = " "; });
    var result24 = localStorage.getItem("productimg23") ||productimg[23].Likes;
    htmlp24 = document.querySelectorAll(".p24")
    htmlp24.forEach(p24 => { p24.textContent = " "; });
    var result25 = localStorage.getItem("productimg24") ||productimg[24].Likes;
    htmlp25 = document.querySelectorAll(".p25")
    htmlp25.forEach(p25 => { p25.textContent = " "; });
    var result26 = localStorage.getItem("productimg25") ||productimg[25].Likes;
    htmlp26 = document.querySelectorAll(".p26")
    htmlp26.forEach(p26 => { p26.textContent = " "; });
    var result27 = localStorage.getItem("productimg26") ||productimg[26].Likes;
    htmlp27 = document.querySelectorAll(".p27")
    htmlp27.forEach(p27 => { p27.textContent = " "; });

    // }else {
    // return
    }

}

// checkout page controls
function transitionToCheckout() {
    document.documentElement.classList.remove('preparation');
}
var checkoutBtn = document.getElementById('checkout');
function directToCheckout() {
checkoutBtn.addEventListener('click', function() {
    checkbalance = document.getElementsByClassName('cart-balance')[0].innerText
    cartbalance = checkbalance.replace('$', '')
    if (Math.sign(cartbalance) == -1) {
    alert("Cannot checkout with a negative balance!")
    }else{
    window.location.replace("https://driedkelps.github.io/twentyfour70v2/SiteB/checkout.html");
    }
stringFinalCartData();
})
}
var endpageBtn = document.getElementById('endpage')
function directToEndPG() {
    endpageBtn.addEventListener('click', function() {
    window.location.replace("https://driedkelps.github.io/twentyfour70v2/endpage.html");   
    })
}

// landing page controls(for a/b testing)
function directAB(){
    var resultSite = ['SiteA', 'SiteB'][Math.floor(Math.random() * 2)];
    console.log(resultSite)
    if (resultSite == 'SiteA') {
    window.location.assign("https://driedkelps.github.io/twentyfour70v2/index_A.html"); 
    //loadModal()
    } else{
    console.log("Go to SiteB") 
    window.location.assign("https://driedkelps.github.io/twentyfour70v2/SiteB/index_B.html");
    //loadModal()
    } 
}


function directToCheckout2() {
if(loadTimeout  == undefined || null) {
    window.location.replace("https://driedkelps.github.io/twentyfour70v2/SiteB/checkout.html");
    }
}

function removeCartItemBtnLoop() {
var removeCartItemButtons = document.getElementsByClassName('btn-danger')
//console.log(removeCartItemButtons)
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
        updateCartTotal()
        var identifier = buttonClicked.parentElement.parentElement
        var pdtidentifier = identifier.getElementsByClassName("item-name")[0].innerText
        realtimeCart = JSON.parse(window.localStorage.getItem("realtimeCart"))
        var thing = (realtimeCart.Product).includes(pdtidentifier)
        console.log(thing)
        console.log('clicked')
    })
}
}

// quantity change in cart 
function quantityChangeloop() {
var quantityInputs = document.getElementsByClassName("item-quantity")
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        //console.log(input)
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

//update basket no.
function updateCartQty() {
    if (localStorage.getItem("realtimeCart") != undefined || null) {
        //console.log(cartData.length)
        realtimeCart = JSON.parse(window.localStorage.getItem("realtimeCart"))
        cartqty = realtimeCart.length
        document.getElementById("cartqty").textContent = cartqty
    }
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
removeCartItemBtnLoop()
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

    for (var y = 0; y < productimg.length; y++ ) {
        var imgcheck = (productimg[y].name === RTCpdt) //.getAttribute("id")

        if ((imgcheck) == true) {
            imgresult = productimg[y].imgSrc
            document.getElementsByClassName("newitemrow")[x].getElementsByClassName("item-image")[0].src = imgresult

            document.getElementsByClassName("newitemrow")[x].getElementsByClassName("item-name")[0].innerText = RTCpdt;  //<-- FIGURE OUT HOW TO change these vals
            document.getElementsByClassName("newitemrow")[x].getElementsByClassName("item-quantity")[0].defaultValue = RTCqty;
            document.getElementsByClassName("newitemrow")[x].getElementsByClassName("subtotalPrice")[0].innerText = RTCprice;
        } else{
            document.getElementsByClassName("newitemrow")[x].getElementsByClassName("item-name")[0].innerText = RTCpdt;  //<-- FIGURE OUT HOW TO change these vals
            document.getElementsByClassName("newitemrow")[x].getElementsByClassName("item-quantity")[0].defaultValue = RTCqty;
            document.getElementsByClassName("newitemrow")[x].getElementsByClassName("subtotalPrice")[0].innerText = RTCprice;
            continue
        }
    }        

    // var newitemname = getElementsByClassName("item-name")[0].innerText
    // var newitemquantity = getElementsByClassName("item-quantity")[0].defaultValue
    // var newsubtotalPrice = getElementsByClassName("subtotalPrice")[0].innerText
}

}
}

// update carttable
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
  
    
// shopping cart total 
function updateCartTotal() {
    var cartRows = document.getElementsByClassName('cart-info')
    var quantityElement = document.getElementsByClassName("item-quantity")
    var priceElement = document.getElementsByClassName("subtotalPrice")
    var total = 0
    var qty;
    var totalsub = 0;
    var subtotal;
    //var balance = document.getElementById("user-balance")

    for (var i = 0; i < cartRows.length; i++) {
        console.log(quantityElement[i].getAttribute('value'));
        qty = parseFloat(quantityElement[i].getAttribute('value'));

        subtotal = parseFloat(priceElement[i].innerText.replace('$',''));
        //console.log(subtotal)
        
        totalsub = totalsub + (qty * subtotal)
        total = total + (qty * subtotal) //replace with total+ totalsub - discount
        //console.log(total)
    }

    function updatebalanceforCartBonus() {
    balancevalue = parseFloat(balance).toFixed(2) //parseFloat(balance.innerText.replace('$',''))

    document.getElementsByClassName('cart-subtotal')[0].innerText = '$' + parseFloat(totalsub).toFixed(2)
    document.getElementsByClassName('cart-total')[0].innerText = '$' + parseFloat(total).toFixed(2)
    document.getElementsByClassName('cart-balance')[0].innerText = '$' + parseFloat(balancevalue - total).toFixed(2)
    window.localStorage.setItem("userbalance", JSON.stringify(balancevalue))
}
// updatebalanceforCartBonus()
// updateSpendingBar()

function updateSpendingBar() {
 
    var spendPercent = 0;
    document.getElementById("spendingBar").style.width = spendPercent + "%";
    balance = JSON.parse(localStorage.getItem("userbalance"));
    balance = parseFloat(balance)
    const Level1 = 24.70;
    const Level2 = 37.00;
    const Level3 = 49.40;
    leftoverL1 = parseFloat(Level1 - totalsub).toFixed(2);
    leftoverL1check = Math.sign((balance - totalsub));
    leftoverL2 = parseFloat(Level2 - totalsub).toFixed(2);
    leftoverL2check = Math.sign((balance - totalsub)) ;
    leftoverL3 = parseFloat(Level3 - totalsub).toFixed(2);
    leftoverL3check = Math.sign((balance - totalsub));
    if (leftoverL1 <= 0 && leftoverL1check != -1 && leftoverL2check != -1 && leftoverL3check != -1) {
        document.getElementById("spendBonusLevel").innerText = "Level 2"
        balance = balance + 12.30 //add currency here(+$12.30)
        if (balance >= 39.6) {
            balance = balance - 12.40    
            }
        updatebalanceforCartBonus()
        // const textcontainer = document.getElementsByClassName("spendbarText").createElement("p");
        // const textincontainer = document.createTextNode("Got money!");
        // textcontainer.appendChild(textincontainer)
        console.log("yay")
        if (leftoverL2 <= 0 && leftoverL2check != -1 && leftoverL3check != -1) {
            document.getElementById("spendBonusLevel").innerText = "Level 3"
            balance = balance + 12.40//add currency here(+$12.40)
            if (balance >= 54.4) {
            balance = balance - 12.40    
            }
            updatebalanceforCartBonus()
            // const textcontainer = document.getElementsByClassName("spendbarText").createElement("p");
            // const textincontainer = document.createTextNode("Got money!");
            // textcontainer.appendChild(textincontainer)
            console.log("yay2")
            if (leftoverL3 <= 0 && leftoverL3check != -1) {
                document.getElementById("spendBonusLevel").innerText = "Cleared"
                document.getElementById("spendingBarvalue").textContent = "All reward tiers achieved."
            }else if (leftoverL3check == -1){
                document.getElementById("spendingBarvalue").textContent = "Not enough currency."
            }else {
                var newspendPercent = (totalsub / Level3)*100
                document.getElementById("spendingBarvalue").innerText = 'Spend $49.40. | '+'$'+leftoverL3 + ' left!'
            }
        } else{
            var newspendPercent = (totalsub / Level2)*100
            document.getElementById("spendingBarvalue").innerText = 'Spend $37.00. | '+'$'+leftoverL2 + ' left!'
        }
    }else if (leftoverL1 <= 0 && leftoverL1check == -1){
        document.getElementById("spendingBarvalue").textContent = "Not enough currency."
    } else{
        var newspendPercent = (totalsub / Level1)*100
        document.getElementById("spendingBarvalue").innerText = 'Spend $24.70. | '+'$'+leftoverL1 + ' left!'
        //id.setInterval(frame, spendPercent)
        }
    var roundnewspendPercent = parseFloat(newspendPercent).toFixed(1)
    document.getElementById("spendingBar").style.width = roundnewspendPercent + "%";
    /// don't update balance here ///
    // var newbalance = balance.toFixed(1)
    // window.localStorage.setItem("userbalance", JSON.stringify(balance))
    // getBalance()
    }
}
    // if (localStorage.getItem("realtimeCart") != undefined || null) {
    //     realtimeCart = JSON.parse(window.localStorage.getItem("realtimeCart"))
    //     if (realtimeCart.length != 0) {
    //         result = true
    //     }
    // }else {
    //     return
    // }


// add to cart 
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
        //console.log("works")
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

    ///console.log(productName[0].innerText);
    itemName = productName[0].innerText
    
    ///console.log(productPrice[0].innerText)
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
                ///console.log(cartData)
            } 
    }
    else {
        window.localStorage.setItem("cartData", JSON.stringify(cartData))
        ///console.log(cartData)
    } 

        // cartData.concat(newArray)
        // window.localStorage.setItem("cartData", JSON.stringify(cartData))
    updateCartItems() 
    console.log(realtimeCart)
    updateCartQty()

}


function updateCartItems() {
    cartData = JSON.parse(localStorage.getItem("cartData"))
    localStorage.setItem(realtimeCart, realtimeCart.push(cartData)) //<-- rmb to add back 'window.localstorage...'
    realtimeCart.flat(1)
    localStorage.setItem("realtimeCart", JSON.stringify(realtimeCart)) //<-- rmb to add back 'window.localstorage...'
    ///console.log("realtimeCart")
    
}


function stringFinalCartData() {
// number of items in cart<TOTAL UNIQUE ITEMS BOUGHT>
addEventListener
things = document.getElementsByClassName("newitemrow")
console.log(things.length)
localStorage.setItem("FinalitemNo", JSON.stringify(things.length));
// list of items bought
finalItems = document.getElementsByClassName("item-name");
const finalItemNames = []
for (var i = 0; i < finalItems.length; i++) {
    var finalItemName = finalItems[i].innerText;
    finalItemNames.push(finalItemName)
    } 
    console.log(finalItemNames);
    localStorage.setItem("finalItemsString", JSON.stringify(finalItemNames));
//total amount spend<TOTAL AMOUNT SPENT>
var finalTotal = document.getElementsByClassName("cart-total")[0].innerText;
localStorage.setItem("finalTotalString", JSON.stringify(finalTotal));
//total additional currency<TOTAL BONUS MONEY ACCRUED>
        //nothing to be done here//
//total likes<TOTAL NUMBER OF LIKES GIVEN>
        //nothing to be done here//
}

function unpackFinalCartData() {
// number of items in cart<TOTAL UNIQUE ITEMS BOUGHT>
totalItems = document.getElementById("PurchasedItems");
finalItemNames = JSON.parse(localStorage.getItem("finalItemsString"));
    para = document.createElement("h4");
    let finalItemsLength = (finalItemNames.length-1);
    const Nnode = document.createTextNode(finalItemsLength);
    para.appendChild(Nnode);
    totalItems .append(para)
// list of items bought
/////finalItemNames = JSON.parse(localStorage.getItem("finalItemsString"));  //repeated above
plist = document.getElementById("checkoutpurchase");
    for (var i = 1; i < finalItemNames.length; i++) {
    para = document.createElement("h5");
    let item = (finalItemNames[i]); 
    const node = document.createTextNode(item);
    para.appendChild(node);
    plist.append(para) 
}
//total amount spend<TOTAL AMOUNT SPENT>
finalTotal = JSON.parse(localStorage.getItem("finalTotalString"));
spendTotal = document.getElementById("checkoutTotal")
    para = document.createElement("h4");
    let finalTotalSpend = finalTotal; 
    const node = document.createTextNode(finalTotalSpend);
    para.appendChild(node);
    spendTotal.append(para)
//total additional currency<TOTAL BONUS MONEY ACCRUED>
        // finalUserBalance = JSON.parse(localStorage.getItem("userbalance"));
        // finalBonus = document.getElementById("checkoutBonus");
        // bonusAccrued = finalUserBalance-24.7;
        // bonusAccrued = bonusAccrued.toFixed(2);
        //     para = document.createElement("h4");
        //     const Bnode = document.createTextNode("$"+bonusAccrued);
        //     para.appendChild(Bnode);
        //     finalBonus.append(para)
//total likes<TOTAL NUMBER OF LIKES GIVEN>
        // finalLikesCount = JSON.parse(localStorage.getItem("Likecount"));
        // finalBonus = document.getElementById("checkoutLikes");
        //     para = document.createElement("h4");
        //     const Lnode = document.createTextNode(finalLikesCount);
        //     para.appendChild(Lnode);
        //     finalBonus.append(para)
}


// Total time spent<TOTAL TIME SPENT>
function displayCheckoutTime() {
    seconds = localStorage.getItem('TimeAtCheckout')
    function pad ( val ) { return val > 9 ? val : "0" + val; }
    document.getElementById("Fseconds").innerHTML=pad(seconds%60);
    document.getElementById("Fminutes").innerHTML=pad(parseInt(seconds/60%60,10));
    document.getElementById("Fhours").innerHTML=pad(parseInt(seconds/3600%60,10));
}






///////////////////////////////////////////////////////////////////////

