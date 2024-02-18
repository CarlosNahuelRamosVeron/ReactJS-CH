import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
    const {products} = useContext(CartContext);
   
    return (
        <div className="cart">
            <ul>
                {products.map(item => (
                    <li key={item.id}>{item.title} ${item.price}</li>
                ))}
            </ul>
        </div>
    )
}

export default Cart;