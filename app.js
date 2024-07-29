
let productDiv = document.querySelector(".Products");

let displayProduct = async () => {
    // productDiv.innerHTML = "";
    let productData = await fetch('https://fakestoreapi.com/products');
    let finalproduct = await productData.json();
    finalproduct.forEach(element => {
  
    })
}

displayProduct();