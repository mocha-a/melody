import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { sanrioStore } from '../api/sanrio';
import QuantitySelector from '../components/public/CountingBtn';
import DashedLine from '../components/public/DashedLine';
import BottomArrow from '../components/icon/BottomArrow';
import CardItem from '../components/ListPage/CardItem';

import "../styles/product.scss";

function ProductPage() {
    const [ buy, setBuy ] = useState(false);    
    const { sanrio, idData } = sanrioStore();

    const location = useLocation();
    const id = location.pathname.split("/").filter(Boolean)[1];

        useEffect(()=>{
            idData(id)
    },[])

    return (
        <div className='product_container'>
            <div className="product_detail">
                <CardItem item={sanrio} name={"product"}/>
                <div className="product_line"><DashedLine/></div>
                <h3>상세보기</h3>
                <div className="detail" dangerouslySetInnerHTML={{ __html: sanrio.p_content }} />
            </div>
            
            {/* <div className='product_buynow' onClick={()=>{setBuy((prev) => !prev)}}>
                        <div className='Product_absolute'>
                <Wish className={"product_wish"}/>
                <p>구매하기</p>
                        </div>
            </div> */}
            
            <div className='product_popup'>
                <button onClick={()=>{setBuy(false)}}><BottomArrow className={"bottomArrow_close"}/></button>
                <p>{sanrio.p_name}</p>
                <div className="product_quantity">
                    <p>수량</p>
                    <QuantitySelector/>
                </div>
            </div>
        </div>
    )
}

export default ProductPage