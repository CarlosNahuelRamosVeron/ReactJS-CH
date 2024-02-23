import { addDoc, collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../itemList/ItemList';
import Loader from '../loader/Loader';
import Carousel from '../carousel/Carousel';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {category} = useParams();

    /*useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        products.forEach(product => {
            addDoc(itemsCollection, product)
        })

        console.log("All product upload successfuly");
    }, []);*/

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const collectionFiltered = category ? query(itemsCollection, where("category", "==", category)) : itemsCollection;

        getDocs(collectionFiltered).then(result => {
            setItems(result.docs.map(product => ({id:product.id, ...product.data()})));
            setLoading(false);
        });
    }, [category]);
    
    return (
        <>
            {category ? "": <Carousel/>}
            {loading ? <Loader/>: <ItemList items={items}/>}
        </>
    )
}

export default ItemListContainer;