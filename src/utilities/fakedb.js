// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = getShoppingCart();
    // add quantity
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
    const shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}

const getShoppingCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart
}


// import { getShoppingCart } from "../utilities/fakedb";

// const cartProductsLoader = async() =>{
// const loadedProducts = await fetch ('products.json');
// const products = await loadedProducts.json();

// // if cart data is in database, async await should be used
// const storedCart = getShoppingCart();
// const savedCart = [];

// for(const id in storedCart){
//     const addedProduct = products.find(pd => pd.id === id)
//     if(addedProduct){
//         const quantity = storedCart[id];
//         addedProduct.quantity = quantity;
//         savedCart.push(addedProduct);
//     }
// }

// // if needed multiple return
// // return [products, savedCart]
// // another Option
// // return {products, cart: savedCart}

// return savedCart;
// }

// export default cartProductsLoader;