let btnPlus = document.querySelector(".qty-plus");
let btnSubmit = document.querySelector("#add_button");

btnPlus.addEventListener("click", increaseQuantity);
btnSubmit.addEventListener("click", addProduct);

function increaseQuantity() {
    
    this.previousElementSibling.value= parseInt(this.previousElementSibling.value) + 1;
  let qty = parseInt(this.previousElementSibling.value);
  let price = parseInt(this.parentElement.nextElementSibling.innerText);
  subTotal(this, price, qty);
}

function loadNewElement(){
    let btnPlusAll = document.querySelectorAll(".qty-plus");
    // for (let i = 0; i < btnPlusAll.length; i++) {
    //     btnPlusAll[i].addEventListener("click", increaseQuantity);
    // }
    btnPlusAll.forEach((btn) =>  btn.addEventListener("click", increaseQuantity));
    
}

function subTotal(elt,price, qty) {
  elt.parentElement.nextElementSibling.nextElementSibling.innerText = price * qty + 'Fr';
}

function addProduct() {
  let name = document.querySelector("#name_product").value;
  let price = document.querySelector("#price_product").value;

  document.querySelector("#all_products").innerHTML += `
    <tr> 
        <td class="article--name"><div style="margin-right:1rem"><img src=""></div> <div><h3>${name}<h3/> <a class="remove" id="1">Supprimer</a></div></td>
        <td class="quantity"> 
        <button class="qty-minus" id="1">-</button>
        <input type="text" readonly placeholder="Unit price"  class="qty" value="1" >
        <button class="qty-plus" id="1">+</button>
        </td>
        <td class="price"> ${price} fr</td> 
        <td class="subtotal">${price} fr</td>
    </tr>
    `;

    loadNewElement();
}
