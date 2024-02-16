import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../json/productos.json'
import { useState } from 'react';
import ItemList from '../itemList/ItemList';
import Loader from '../loader/Loader';
import { getFirestore, collection, addDoc, query, getDocs } from 'firebase/firestore'; //TODO

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {category} = useParams();

    useEffect(() => {
        setLoading(true);
        const promise = new Promise(resolve => {
            setTimeout(() => {
                resolve(category ? products.filter(item => item.category == category) : products);
            }, 2000);
        })
        promise.then(data => {
            setItems(data);
            setLoading(false);
        })
        
    }, [category]);

    /*useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "item");

        products.forEach(product => {
            addDoc(itemsCollection, product)
        })

        console.log("All product upload successfuly");
    }, []);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "item");
        const query = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;

        getDocs(query).then(result => {
            setItems(result.docs.map(product => {{id:product.id, ...product.data()}}));
        })
    }, [id]);*/
    
    return (
        loading ? <Loader/>: <ItemList items={items}/>  
    )
}

export default ItemListContainer;