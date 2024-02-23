import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../itemDetail/ItemDetail';
import Loader from '../loader/Loader';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const product = doc(db, "items", id)

        getDoc(product).then(result => {
            setItem({id:result.id, ...result.data()});
            setLoading(false);
        });
    }, [id]);

    return (
        loading ? <Loader/>: <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer;