import { createContext } from "react";
import products from '../json/productos.json';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    console.log(products);
    const productsQuantity = products.length;
    return (
        <CartContext.Provider value={{products, productsQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;