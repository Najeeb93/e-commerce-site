
let productDiv = document.querySelector(".products");

let displayProduct = async () => {
    productDiv.innerHTML = "";
    let product = await fetch('https://fakestoreapi.com/products');
    let finalproduct = await product.json();
    finalproduct.forEach(element => {
        productDiv.innerHTML += `<div class="Product-Item">
        <img scr="${element.image}" alt="">
        <p>Price Rs. ${element.price} | ${element.rating.rate}
        </p>
        <h3>${element.title}</h3>
        </div>` 
    });
}

displayProduct();