
    const products = [
       {name: "Classic Cheesecake", image: "images/ClassicCheesecake.jpg", price: "125kr"},
       {name: "Hallon Cheesecake",image:"images/HallonCheesecake.jpg", price: "125kr"},
       {name:"Peanut Cheesecake",image:"images/PeanutCheesecake.jpg", price: "125kr"},
       {name: "Oreo Cheesecake",image:"images/OreoCheesecake.jpg", price: "125kr"},
       {name:"Black Forest Cheesecake",image:"images/BlackForestCheesecake.jpg", price: "125kr"},
       {name:"Triple Chocolate Cheesecake",image:"images/TripleChocolateCheesecake.jpg", price: "125kr"},
       {name:"Strawberry Cheesecake",image:"images/StrawberryCheesecake.jpg", price: "125kr"},
       {name: "Caramel Cheesecake",image:"images/CaramelCheesecake.jpg", price: "125kr"},
       
    ];

const productsSection = document.getElementById("productsSection");

products.forEach(product => {
    const listCard = createProductCard(product);
    productsSection.appendChild(listCard);
});

let cart = [];
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

function createProductCard(product) {
    const listCard = document.createElement("div");
    listCard.classList.add("productCard");

    const productName = document.createElement("h3");
    productName.textContent = product.name;

    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.name;
    productImage.style.width = "250px";

    const productPrice = document.createElement("p");
    productPrice.textContent = `$${product.price}`;

    const addProductButton = document.createElement("button");
    addProductButton.textContent = "Add to Cart";
    addProductButton.style.border= "1px solid #ec729c";
    addProductButton.style.borderRadius = '5px'; 
    addProductButton.style.background = " #ec729c";
    addProductButton.style.fontWeight="bold";
    addProductButton.style.color="#f7e9d1";
    addProductButton.style.padding="10px";
    addProductButton.style.margin="10px";
    addProductButton.addEventListener('click', () => {
        addToCart(product);
        showCart(); 
    });

    listCard.appendChild(productName);
    listCard.appendChild(productImage);
    listCard.appendChild(productPrice);
    listCard.appendChild(addProductButton);
   

    return listCard;
}

function addToCart(product) {
    cart.push(product);
    showCart(); 
}
function removeitem(product){
    cart.splice(product, 1);
    showCart();
}

function showCart() {
    cartItems.innerHTML = "";
    
    cart.forEach((item, product) => {
        const cartItem = document.createElement("li");
        cartItem.textContent = `${item.name}`;


        const removeProductButton= document.createElement("button");
        removeProductButton.textContent="Remove";
        removeProductButton.style.border = "1px solid #ec729c";
        removeProductButton.style.background = " #ec729c";
        removeProductButton.style.color="#f7e9d1";
        removeProductButton.style.padding="10px";
        removeProductButton.style.margin="10px";
        removeProductButton.style.borderRadius = '5px'; 
        removeProductButton.addEventListener('click',()=> {
            removeitem(product);
           
        })
        cartItem.appendChild(removeProductButton);
        cartItems.appendChild(cartItem);
    });
}