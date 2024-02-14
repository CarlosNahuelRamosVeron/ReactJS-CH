import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './ItemCount.css';

const ItemCount = ({stock}) => {
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

    const onAdd = () => {
        if (counter <= itemStock) {
            setItemStock(itemStock - counter);
            setAmountOfItemsInCart(amountOfItemsInCart + counter);
            setCounter(1);
            console.log(counter + " products added to the cart. Available products: " + (itemStock - counter));
        }
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock])

    const isItemSoldOut = itemStock < 1;

    return (
        <div className="countContainer">
            <div className="stockLeft"> 
                {isItemSoldOut ? <p>SOLD OUT</p> : <p>Stock left: {itemStock}</p>}
            </div>
            <div className={isItemSoldOut ? "counterContainerOff" : "counterContainer"}>
                <button type="button" className="counterButtons" onClick={decrease}>-</button>
                <button type="button" className="counterButtons">{counter}</button>
                <button type="button" className="counterButtons" onClick={increase}>+</button>
            </div>
            <div>
                <button disabled={isItemSoldOut} type="button" className="counterButtons addToCartButton" onClick={onAdd}>Add to cart</button>
            </div>
            <Link to={"/cart"}>
                <button type="button" className={amountOfItemsInCart > 0 ? "counterButtons addToCartButton": "buttonOff"}>Go to cart</button>
            </Link>
        </div>
    )
}

export default ItemCount;