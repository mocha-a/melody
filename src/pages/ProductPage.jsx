import { useLocation } from 'react-router-dom';
import { sanrioStore } from '../api';
import { useEffect } from 'react';
import ProductItem from '../components/ProductPage/ProductItem';

function ProductPage() {
    const { sanrio, idData } = sanrioStore();
    const location = useLocation();
    const id = location.pathname.split("/").filter(Boolean)[1];

    useEffect(()=>{
        idData(id)
    },[])

    return (
        <div><ProductItem item={sanrio}/></div>
    )
}

export default ProductPage