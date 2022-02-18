let btnPlusAll = document.querySelectorAll('.qty-plus');
let btnMinusAll = document.querySelectorAll('.qty-minus');

btnPlusAll.forEach((btn) => {btn.addEventListener('click', increaseQuantity)});
btnMinusAll.forEach((btn) => {btn.addEventListener('click', decreaseQuantity)});

let totalDisplay = document.querySelector('#total_display');
let addBtn = document.querySelector('#add_button');
addBtn.addEventListener('click', addProduct);


function addProduct() {
    let name = document.querySelector('#name_product');
    let price = document.querySelector('#price_product');

    let all_products = document.querySelector('#all_products');

    all_products.innerHTML =  all_products.innerHTML  + '<tr><td class="article--name"><div style="margin-right:1rem"><img src=""></div> <div><h3>' + name.value + '<h3/> <a class="remove" id="1">Supprimer</a></div></td><td class="quantity"> <button class="qty-minus" id="1">-</button><input type="text" readonly placeholder="Unit price"  class="qty" value="1" ><button class="qty-plus" id="1">+</button></td><td>' + price.value + 'fr</td> <td class="subtotal">' + price.value +' fr</td></tr>'
    loadEvents()


}

function loadEvents() {
    let btnPlusAll = document.querySelectorAll('.qty-plus');
    let btnMinusAll = document.querySelectorAll('.qty-minus');
  
    btnPlusAll.forEach((btn) => {btn.addEventListener('click', increaseQuantity)});
    btnMinusAll.forEach((btn) => {btn.addEventListener('click', decreaseQuantity)});
    
}
function increaseQuantity(){
    this.previousElementSibling.value++

    
     subTotalUp(this)
    
}

function decreaseQuantity(){
    // let qty = document.querySelector('.qty');

    let qty = this.nextElementSibling;
    if( qty.value > 0){
        qty.value = parseInt(qty.value) -1;
    }
    subTotalDown(this)
   
}

function subTotalUp(elt){
    let price = parseInt(elt.parentElement.nextElementSibling.innerHTML);
    let qty = parseInt(elt.previousElementSibling.value)
    elt.parentElement.nextElementSibling.nextElementSibling.innerHTML = parseInt(qty) * price
    total()
}

function subTotalDown(elt){
    let price = parseInt(elt.parentElement.nextElementSibling.innerHTML);
    let qty = parseInt(elt.nextElementSibling.value)
    elt.parentElement.nextElementSibling.nextElementSibling.innerHTML = parseInt(qty) * price
    total()
}


function total(){



    totalDisplay.innerHTML = "1000";
}

