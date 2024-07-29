
let productDiv = document.querySelector(".Products");

let displayProduct = async () => {
    productDiv.innerHTML = "";
    let product = await fetch('https://fakestoreapi.com/products');
    let finalproduct = await product.json();
    finalproduct.forEach(element => {
        productDiv.innerHTML  
    });
}

displayProduct();