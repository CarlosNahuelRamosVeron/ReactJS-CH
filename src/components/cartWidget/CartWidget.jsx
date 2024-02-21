import { useContext } from "react";
import { Link } from 'react-router-dom';
import iconCart from '../../assets/cart.svg';
import { CartContext } from "../context/CartContext";
import './CartWidget.css';

const CartWidget = () => {
    const {totalQuantityOfProducts} = useContext(CartContext);
    const isQuatityCero = totalQuantityOfProducts() === 0;

    return (
        <Link to={"/cart"}>
            <div className="cartWidgetContainer">
                <img 
                    src={iconCart} 
                    className={isQuatityCero? "icontCartAlone": "iconCart"} 
                    alt="Carrito" width={24} 
                />
                <div className={isQuatityCero? 'off': 'amount'}>
                    <span className="amountValue">{totalQuantityOfProducts()}</span>
                </div>
            </div>
        </Link>
    )
}

export default CartWidget;