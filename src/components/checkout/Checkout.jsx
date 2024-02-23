import { addDoc, collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useContext, useState } from "react";
import Button from "../button/Button";
import { CartContext } from "../context/CartContext";
import './Checkout.css';
//TODO input validations
const Checkout = () => {
    const {cart, clear, totalQuantityOfProducts, totalPriceOfProducts} = useContext(CartContext);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [number, setNumber] = useState();
    const [orderId, setOrderId] = useState();

    const generateOrder = () => {
        if (name.length === 0 || email.length === 0 || number === 0) {
            return false;
        }
        const buyer = {name:name, email:email, phone:number};
        const items = cart.map(item => ({id:item.id, title:item.title, price:item.price}));
        const date = new Date();
        const customDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
        const order = {buyer:buyer, items:items, date:customDate, total:totalPriceOfProducts()};
        
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(result => {
            setOrderId(result.id);
            clear();
        });

    }

    return (
        <div className="checkoutContainer">
            <div>
                <h1>CHECKOUT</h1>
            </div>
            <div className="formContainer">
                <div>
                    <form action="" className="form">
                        <div className="inputContainer">
                            <label className="label">Full Name</label>
                            <input 
                                type="text" 
                                className="input" 
                                onInput={(event) => setName(event.target.value)}
                            />
                        </div>
                        <div className="inputContainer">
                            <label className="label">Email Address</label>
                            <input 
                                type="text" 
                                className="input"
                                onInput={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="inputContainer">
                            <label className="label">Phone Number</label>
                            <input 
                                type="text" 
                                className="input"
                                onInput={(event) => setNumber(event.target.value)}
                            />
                        </div>
                        <Button 
                            type="button" 
                            value="Generate order" 
                            className="generateOrder"
                            onClick={generateOrder}
                        />
                    </form>
                </div>
                <div>
                    <table>
                        <th className="checkoutRows checkoutHeader">
                            <td></td>
                            <td>Title</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Total</td>
                        </th>
                        <tbody>
                            {cart.map(product => 
                                <tr className="checkoutRows">
                                    <td><img src={product.image} alt={product.title} className="checkoutProductImg"/></td>
                                    <td>{product.title}</td>
                                    <td>${product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>${product.quantity * product.price}</td>
                                </tr>
                            )}
                            <tr className="checkoutRows">
                                <td>Total</td>
                                <td></td>
                                <td></td>
                                <td>{totalQuantityOfProducts()}</td>
                                <td>${totalPriceOfProducts()}</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={orderId? "orderId" : "off"}>
                <h2>Thanks for your order!</h2>
                <h4>Your order id is: <b>{orderId}</b></h4>
            </div>
        </div>
    )
}

export default Checkout;