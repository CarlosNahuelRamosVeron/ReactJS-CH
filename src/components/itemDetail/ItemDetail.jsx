import { useContext } from "react";
import { CartContext } from '../context/CartContext';
import ItemCount from '../itemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    return (
        <div className="itemDetail">
            <div className="itemDetailImageContainer">
                <img className='itemDetailImage' src={item.image} alt={item.title} />
            </div>
            <div className='itemDetails'>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <p>${item.price}</p>
                <p>Brand: {item.brand}</p>
                <ItemCount stock={item.stock} onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail;