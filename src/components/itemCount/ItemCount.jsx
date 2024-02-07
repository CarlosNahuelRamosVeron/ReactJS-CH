import { useEffect, useState } from "react";
import './ItemCount.css';

const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

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
            setItemStock(stock - counter);
            setCounter(1);
            console.log(counter + " products added to the cart. Available products: " + (itemStock - counter));
        }
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock])

    return (
        <div className="countContainer">
            <div className="stockLeft"> 
                <p>Stock left: {stock}</p>
            </div>
            <div className="counterContainer">
                <button type="button" className="counterButtons" onClick={decrease}>-</button>
                <button type="button" className="counterButtons">{counter}</button>
                <button type="button" className="counterButtons" onClick={increase}>+</button>
            </div>
            <div>
                <button type="button" className="counterButtons addToCartButton" onClick={onAdd}>Add to cart</button>
            </div>
        </div>
    )
}

export default ItemCount;