
let btnPlusAll = document.querySelectorAll('.qty-plus');
let btnMinusAll = document.querySelectorAll('.qty-minus');
let addButton = document.querySelector('#add_button')

btnPlusAll.forEach((btn) => {btn.addEventListener('click', increaseQuantity)});
btnMinusAll.forEach((btn) => {btn.addEventListener('click', decreaseQuantity)});

addButton.addEventListener('click', addArticle);


function increaseQuantity(){
    this.previousElementSibling.value =  parseInt(this.previousElementSibling.value) +1 ;
    subtotal(this);

}


function decreaseQuantity(){
    if( this.nextElementSibling.value > 0){
        this.nextElementSibling.value = parseInt(this.nextElementSibling.value) -1;
        subtotal(this) 
    }
    
}

function subtotal(elt){
    let price = parseInt(elt.parentElement.nextElementSibling.innerText);
    let qty = parseInt(elt.previousElementSibling.value);
    let subt = price*qty;

    elt.parentElement.nextElementSibling.nextElementSibling.innerText = subt + ' fr';
}

function addArticle(){

    let name = document.querySelector('#name_product');
    let price = document.querySelector('#price_product');
    document.querySelector('#all_products').innerHTML =  document.querySelector('#all_products').innerHTML +  '<tr><td class="article--name"><div style="margin-right:1rem"><img src="https://picsum.photos/id/237/100/100"></div> <div><h3>'+ name.value +'<h3/> <a class="remove" id="1">Supprimer</a></div></td><td class="quantity"> <button class="qty-minus" id="1">-</button><input type="text" readonly placeholder="Unit price"  class="qty" value="1" ><button class="qty-plus" id="1">+</button></td><td class="price">' + price.value + 'fr</td> <td class="subtotal">' + price.value + ' fr</td></tr>'
    loadNewElement();

}

function loadNewElement(){

    let btnPlusAll = document.querySelectorAll('.qty-plus');
    let btnMinusAll = document.querySelectorAll('.qty-minus');

    btnPlusAll.forEach((btn) => {btn.addEventListener('click', increaseQuantity)});
    btnMinusAll.forEach((btn) => {btn.addEventListener('click', decreaseQuantity)});
}