import './ItemListContainer.css';

const ItemListContainer = ({message}) => {
    return (
        <div className="itemListContainer">
            <div className="alert" role="alert">{message}</div>
        </div>
        
    )
}

export default ItemListContainer;