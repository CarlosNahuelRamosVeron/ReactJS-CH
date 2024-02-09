import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../json/productos.json'
import { useState } from 'react';
import ItemList from '../itemList/ItemList';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {category} = useParams();

    useEffect(() => {
        const promise = new Promise(resolve => {
            setTimeout(() => {
                resolve(category ? products.filter(item => item.category == category) : products);
            }, 2000);
        })
        promise.then(data => {
            setItems(data);
        })
    }, [category]);
    return (
        <ItemList items={items}/>
    )
}

export default ItemListContainer;