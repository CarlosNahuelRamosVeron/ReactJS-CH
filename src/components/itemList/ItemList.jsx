import Item from '../item/Item';
import './ItemList.css';

const ItemList = ({items}) => {
    return (
        <div className="itemList">
            {items.map(item => {
                <Item key={item.id} item={item}/>
            })}
        </div>
    )
}

export default ItemList;