import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({item}) => {
    console.log("item in ITEM: ", item);
    return (
        <div className="item">
            <Link to={"/item/" + item.id}>
                <img src={item.img} className="itemImage" alt={item.title} />
                <div>
                    <p className="itemText">{item.title}</p>
                </div>
            </Link>
        </div>
    )
}

export default Item;