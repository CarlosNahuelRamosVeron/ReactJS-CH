import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
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
    console.log("aaaaaaaaa", items)
    return (
        <div className='itemListContainer'>
            <ItemList items={items}/>
        </div>   
    )
}

export default ItemListContainer;