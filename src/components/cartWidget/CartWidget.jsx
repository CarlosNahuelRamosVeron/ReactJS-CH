import { useContext } from "react";
import { Link } from 'react-router-dom';
import iconCart from '../../assets/cart.svg';
import { CartContext } from "../context/CartContext";
import './CartWidget.css';

const CartWidget = () => {
    const {totalQuantityOfProducts} = useContext(CartContext);

    return (
        <Link to={"/cart"} className="cartLink">
            <div className="cartWidgetContainer">
                <img 
                    src={iconCart} 
                    className="iconCart" 
                    alt="Cart" width={24} 
                />
            </div>
            <div className={totalQuantityOfProducts() === 0 ? 'off': 'amount'}>
                    <span className="amountValue">{totalQuantityOfProducts()}</span>
            </div>
        </Link>
    )
}

export default CartWidget;