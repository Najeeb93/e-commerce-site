
let displayProduct = async () => {
    let product = await fetch('https://fakestoreapi.com/products');
    let finalproduct = await product.json();
    console.log(finalproduct);
}

displayProduct();