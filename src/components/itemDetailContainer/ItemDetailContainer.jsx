import { useEffect } from 'react';
import { useState } from 'react';
import './ItemDetailContainer.css';
import productList from '../json/productos.json'
import ItemDetail from '../itemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [item, setItem] = useState();
    const {id} = useParams();

    useEffect(() => {
        const promise = new Promise(resolve => {
            setTimeout(() => {
                let product = productList.find(item => item === parseInt(id));
                resolve(product);
            }, 2000)
        })
        promise.then(data => {
            setItem(data);
        });
    }, [id])
    return (
        <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer;