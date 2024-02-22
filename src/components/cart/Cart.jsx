import { useContext } from "react";
import { Link } from "react-router-dom";
import trashIcon from '../../assets/trash.svg';
import { CartContext } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
    const {cart, removeItemById, totalQuantityOfProducts, totalPriceOfProducts} = useContext(CartContext);
   
    if (totalQuantityOfProducts() == 0) {
        return (
            <div className="cart cartEmpty">
                <h1>The cart is empty</h1>
                <Link to={"/"} className={"goBack"}>Go back</Link>
            </div>
        )
    }

    return (
        <div className="cart">
            <table className="table">
                <tbody>
                    <th className="tableRow tableHeader">
                        <td></td>
                        <td>Title</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Total</td>
                        <td></td>
                    </th>
                    {cart.map(product => 
                        <tr className="tableRow">
                            <td><img src={product.image} alt={product.title} className="cartProductImg"/></td>
                            <td>{product.title}</td>
                            <td>${product.price}</td>
                            <td>{product.quantity}</td>
                            <td>${product.quantity * product.price}</td>
                            <td>
                                <a href="#" onClick={() => {removeItemById(product.id)}}>
                                    <img src={trashIcon} alt="Remove item"/>
                                </a>
                            </td>
                        </tr>
                    )}
                    <tr className="tableRow">
                        <td>Total</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>${totalPriceOfProducts()}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Cart;