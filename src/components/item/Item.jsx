import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({item}) => {
    return (
        <div className="item">
            <Link to={"/item/" + item.id}>
                <img src={item.image} className="itemImage" alt={item.title} />
                <div className='itemInfo'>
                    <h3>{item.title}</h3>
                    <p>${item.price}</p>
                </div>
            </Link>
        </div>
    )
}

export default Item;