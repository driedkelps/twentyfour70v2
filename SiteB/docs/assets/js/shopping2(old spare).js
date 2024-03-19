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

function updateCartTotal() {
    var cartRows = document.getElementsByClassName('cart-items');
    var quantityElements = document.getElementsByClassName("item-quantity");
    var priceElements = document.getElementsByClassName("subtotalPrice");

    for (var i = 0; i < cartRows.length; i++) {
        var quantity = quantityElements[i].value; // Get the value of the quantity input
        console.log("Quantity", quantity);

        var subtotal = priceElements[i].innerText.replace('$','');
        console.log("Subtotal:", subtotal); 
    }
}


