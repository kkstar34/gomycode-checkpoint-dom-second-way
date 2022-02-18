var articles = [
	{
		id : 1,
		image : "https://picsum.photos/id/237/100/100",
		name : "DIP n DIP",
		price : 150,
		quantity : 1
	},

	{
		id : 2,
		image : "https://picsum.photos/id/237/100/100",
		name : "Sac",
		price : 2000,
		quantity : 3
	},

	

	
];

function loadBody(){

	displayAllProducts()
	document.getElementById("add_button").addEventListener("click", checkInput);
	loadNewElement();
	total();

}

function displayAllProducts(){

	let tbody = document.getElementById("all_products");
	tbody.innerHTML = `${articles.map(article => 
		`<tr> 
		<td class="article--name"><div style="margin-right:1rem"><img src="${article.image}"></div> <div><h3>${article.name}<h3/> <a class="remove" id=${article.id}>Supprimer</a></div></td>
	
			
			<td class="quantity"> <button class="qty-minus" id=${article.id}>-</button><input type="text" readonly placeholder="Unit price"  class="qty" value=${article.quantity} ><button class="qty-plus" id=${article.id}>+</button></td>
			<td> ${article.price}</td> 
			<td class="subtotal">${article.price * article.quantity} </td>
		</tr>`).join("")}`;
		loadNewElement();

		
	
	
}

function loadNewElement(){

	document.querySelectorAll(".remove").forEach(removebtn => removebtn.addEventListener("click", removeProduct));
	// document.querySelectorAll(".quantity").forEach(qty => qty.addEventListener("change", changeSubtotal));
	document.querySelectorAll(".qty-plus").forEach(qty => qty.addEventListener("click", increaseQuantity));
	document.querySelectorAll(".qty-minus").forEach(qty => qty.addEventListener("click", decreaseQuantity));
	


}

function increaseQty(){
	this.previousElementSibling.value++;
	let qty = parseInt(this.previousElementSibling.value);
	let price = parseFloat(this.parentElement.nextElementSibling.innerText);
	sousTotal(this, qty, price)

}


function decreaseQty(){
	

	if(parseInt(this.nextElementSibling.value) > 0){
		this.nextElementSibling.value--;
		let qty = parseInt(this.nextElementSibling.value);
		let price = parseFloat(this.parentElement.nextElementSibling.innerText);
	sousTotal(this, qty, price)
	}
}

function sousTotal(btn, qty, price){

	btn.parentElement.nextElementSibling.nextElementSibling.innerHTML = qty * price;

}




function add( name, price, quantity) {
	
	const id = new Date().getTime();
	let i =parseInt(Math.random() * 100 ) 
	articles.push({
		id : id,
		image : "https://picsum.photos/id/"+i+"/100/100",
		name : name,
		price : price,
		quantity :quantity
	})

	total();


	
	
}



// Check if input is empty
function checkInput(){

	var nameProduct = document.getElementById("name_product");
	var priceProduct = document.getElementById("price_product");
	if (nameProduct.value != "" && priceProduct.value != "") {
		// addProduct();
		
		add(nameProduct.value, priceProduct.value, 1);
		
		displayAllProducts()
		loadNewElement()
		total();
	}
}


// Change subtotal
function decreaseQuantity(element) {
	
	 
	const	index = articles.findIndex(article => parseInt(this.id) === article.id);
	if(articles[index].quantity > 0){
	articles[index].quantity -= 1;
	/* let quantity = articles[index].quantity;
	let subtotal = articles[index].price * quantity; */

	displayAllProducts()
	loadNewElement()
	total();
	}
}

function increaseQuantity(element) {

	
	const	index = articles.findIndex(article => parseInt(this.id) === article.id);
	if(articles[index].quantity <=1000){
		articles[index].quantity += 1;
		/* let quantity = articles[index].quantity;
		let subtotal = articles[index].price * quantity; */
	   displayAllProducts()
	   total();
	}


	
}

// Remove a product
function removeProduct(element) {
	

	const	index = articles.findIndex(article => parseInt(this.id) === article.id);
	articles.splice(index, 1)
	displayAllProducts()
	total();
}

// Sum total
function total(){
	let totalDisplay = document.getElementById("total_display");
	let arr =[];
	articles.forEach(element => arr.push(element.price * element.quantity ));

	if(arr.length > 0){
		let tot = arr.reduce((acc, curr) => acc + curr)
		totalDisplay.innerHTML = tot + " fr cfa";
	}

	if(arr.length === 0){
		totalDisplay.innerHTML =  "0 fr cfa";
	}


/* function total(){
	var totalDisplay = document.getElementById("total_display");
	var sum = 0;
	var tbody = document.getElementById("all_products");
	for (var i = 0; i < tbody.rows.length; i++) {
		sum = sum + parseFloat(tbody.rows[i].cells[3].innerHTML);
	}
	var total = sum.toFixed(2);
	totalDisplay.innerHTML = total + " euros";
} */

	

	
}
