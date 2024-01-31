import './ItemDetail.css';

const ItemDetail = ({item}) => {
    return (
        <div className="itemDetail">
            <div className='itemImage'>
                <img src={item.image} alt={item.title} />
            </div>
            <div className='itemDetails'>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <p>${item.price}</p>
            </div>
        </div>
    )
}

export default ItemDetail;