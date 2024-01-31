import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({item}) => {
    console.log("item in ITEM: ", item);
    return (
        <div className="item">
            <Link to={"/item/" + item.id}>
                <img src={item.image} className="itemImage" alt={item.title} />
                <div>
                    <h5 className="itemText">{item.title}</h5>
                    <p className="itemPrice">${item.price}</p>
                </div>
            </Link>
        </div>
    )
}

export default Item;