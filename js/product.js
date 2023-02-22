var priceOfEle, sizeOfEle, colorOfEle, quaOfEle;
var finalValueOfItem = "";

// click to change main image
const sliderMainImage = document.getElementById("product-main-image");
const sliderImageList = document.getElementsByClassName("image-list");

sliderImageList[0].onclick = function () {
    sliderMainImage.src = sliderImageList[0].src;
}
sliderImageList[1].onclick = function () {
    sliderMainImage.src = sliderImageList[1].src;
}
sliderImageList[2].onclick = function () {
    sliderMainImage.src = sliderImageList[2].src;
}
sliderImageList[3].onclick = function () {
    sliderMainImage.src = sliderImageList[3].src;
}

// price of Element
const priceOftheThing = document.getElementsByClassName("offer-price");

let price = priceOftheThing[0].innerHTML;


// size of item
function sizeofThing(size) {
    sizeOfEle = size;
}

// color of item
function colorOfItem(color) {
    colorOfEle = color;
}

// Quantity of text

// increament
function quantityOfItemInc() {
    var quantityitem = document.getElementById("quantity").value;
    quantityitem++;

    if (quantityitem > 1) {
        document.querySelector(".minus-btn").removeAttribute("disabled");
        document.querySelector(".minus-btn").classList.remove("disabled");
    }

    document.getElementById("quantity").value = quantityitem;
}

// decreament
document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
function quantityOfItemDec() {

    quantityitem = document.getElementById("quantity").value;
    quantityitem--;

    if (quantityitem == 1) {
        document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
    }

    document.getElementById("quantity").value = quantityitem;
}



function ItemValueValidation() {

    reg = /^[0-9]+$/;
    for (var i = 0; i < price.length; i++) {
        if (reg.test(price[i]) || price[i] == ".") {
            finalValueOfItem += price[i];
        }
    }
    // finalValueOfItem = (finalValueOfItem * 1)

    // size validation
    if(sizeOfEle == null || sizeOfEle == ""){
        alert("Size Selection is Must!!!");
        return false;
    }

    // Quantity of Item
    quaOfEle = document.getElementById("quantity").value;

    // storage function called
    pushData();

    // for redirection function
    redirectTobilling();
    
}

// Push Data into local Storage
function pushData() {
    localStorage.setItem("ItemValue", finalValueOfItem);
    localStorage.setItem("ItemSize", sizeOfEle);
    localStorage.setItem("ItemQuantity", quaOfEle);
}

//Add to cart
function redirectTobilling() {
    location.href = "billing.html";
}

