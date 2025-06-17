const getCart=()=>{
   const storedCart=localStorage.getItem('cart');
    JSON.parse(storedCart);
return storedCart;
}

const addCart=(id)=>{
   
    const newCart=!id;
  saveCart(newCart);

}
const saveCart=(cart)=>{
const cartString=JSON.stringify(cart);
localStorage.setItem('cart',cartString);
}
export {getCart,addCart}