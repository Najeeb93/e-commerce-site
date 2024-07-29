
let productDiv = document.querySelector(".Product");

let displayProduct=async ()=> {
    productDiv.innerHTML = '';
    let productData = await fetch('https://fakestoreapi.com/products');
    let finalproduct = await productData.json();
    finalproduct.forEach(element => {
        productDiv.innerHTML += `<div class="ProductItems">
        <img src="${element.image}" alt="">
        <p>${element.price} | ${element.rating.rate}</p>
        <h3>${element.title}</h3>
      </div>`
    });
}

displayProduct();