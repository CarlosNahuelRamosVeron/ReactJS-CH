import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => { 
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let indexOfItem = cart.findIndex(product => product.id === item.id);
            cart[indexOfItem].quantity += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, quantity:quantity}]);
        }
    };

    const removeItemById = (id) => {
        setCart([...cart.filter(product => product.id != id)]);
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some(product => product.id === id);
    };

    const totalQuantityOfProducts = () => {
        return cart.reduce((acum, product) => acum += product.quantity, 0);
    };

    const totalPriceOfProducts = () => {
        return cart.reduce((acum, product) => acum += product.quantity * product.price, 0);
    };    

    return (
        <CartContext.Provider 
            value={{cart, addItem, removeItemById, clear, totalQuantityOfProducts, totalPriceOfProducts}}>
                {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;