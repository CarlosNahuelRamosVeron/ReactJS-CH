import './ItemDetail.css';
import ItemCount from '../itemCount/ItemCount';

const ItemDetail = ({item}) => {
    return (
        <div className="itemDetail">
            <div className="itemDetailImageContainer">
                <img className='itemDetailImage' src={item.image} alt={item.title} />
            </div>
            <div className='itemDetails'>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <p>${item.price}</p>
                <ItemCount stock={item.stock}/>
            </div>
        </div>
    )
}

export default ItemDetail;