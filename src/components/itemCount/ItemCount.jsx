import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from '../button/Button';
import './ItemCount.css';

const ItemCount = ({stock, onAdd}) => {
   
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [amountOfItemsInCart, setAmountOfItemsInCart] = useState(0);

    const increase = () => {
        if (counter < itemStock) {
            setCounter(counter + 1);
        }
    }

    const decrease = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const addToCart = () => {
        if (counter <= itemStock) {
            setItemStock(itemStock - counter);
            setAmountOfItemsInCart(amountOfItemsInCart + counter);
            setCounter(1);
            onAdd(counter);
        }
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock])

    const isItemSoldOut = itemStock < 1;

    return (
        <div className="countContainer">
            <div className="stockLeft"> 
                {isItemSoldOut? <p>SOLD OUT</p>: <p>Stock left: {itemStock}</p>}
            </div>
            <div className={isItemSoldOut? "off": "counterContainer"}>
                <Button type="button" className="counter" onClick={decrease} value="-"/>
                <Button type="button" className="counter" value={counter}/>
                <Button type="button" className="counter" onClick={increase} value="+"/>
            </div>
            <div>
                <Button 
                disabled={isItemSoldOut} 
                type="button" 
                className="counter counterWider" 
                onClick={addToCart} 
                value="Add to cart"
                />
            </div>
            <Link to={"/cart"}>
                <Button 
                    type="button" 
                    className={amountOfItemsInCart > 0? "counter counterWider": "off"} 
                    value="Go to cart"
                />
            </Link>
        </div>
    )
}

export default ItemCount;