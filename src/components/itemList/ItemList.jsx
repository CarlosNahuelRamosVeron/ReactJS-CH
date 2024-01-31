import Item from '../item/Item';
import './ItemList.css';

const ItemList = ({items}) => {
    return (
        <div className="itemList">
            {items.map(item => {
                console.log("item: ", item);
                <Item item={item}/>
            })}
        </div>
    )
}

export default ItemList;