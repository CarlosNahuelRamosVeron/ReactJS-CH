import { useEffect } from 'react';
import { useState } from 'react';
import productList from '../json/productos.json'
import ItemDetail from '../itemDetail/ItemDetail';
import Loader from '../loader/Loader';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        setLoading(true);
        const promise = new Promise(resolve => {
            setTimeout(() => {
                let product = productList.find(item => item.id === parseInt(id));
                resolve(product);
            }, 2000)
        })
        promise.then(data => {
            setItem(data);
            setLoading(false);
        });
    }, [id])
    return (
        loading ? <Loader/>: <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer;