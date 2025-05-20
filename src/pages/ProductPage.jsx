import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { sanrioStore } from '../api/sanrio';
import QuantitySelector from '../components/public/CountingBtn';
import DashedLine from '../components/public/DashedLine';
import TwoButton from '../components/public/TwoButton';
import Wish from '../components/public/Wish';
import BottomArrow from '../components/icon/BottomArrow';
import PopupAction from '../components/ProductPage/PopupAction';
import CardItem from '../components/ListPage/CardItem';

import "../styles/product.scss";

function ProductPage() {
    const { sanrio, idData } = sanrioStore();
    const [ buy, setBuy ] = useState(false); 
    const [ price, setPrice ] = useState(0);
    const [ count, setCount ] = useState(1);
    const unitPrice = Number(sanrio?.p_price) ?? 0;
    const totalPrice = unitPrice * count;

    const navigate = useNavigate();
    const location = useLocation();
    const id = location.pathname.split("/").filter(Boolean)[1];

    useEffect(()=>{
        idData(id)
    },[])

    useEffect(() => {
    if (sanrio?.p_price) {
        setPrice(sanrio.p_price);
    }
    }, [sanrio]);
    
    function buynow(){
        navigate("/payment", { 
            state: {
                name: sanrio?.p_name,
                thmb: sanrio?.p_thumb,
                count,
                totalPrice
            }
        });
    }
    
    return (
        <div className='product_container'>
            <div className="product_detail">
                <CardItem item={sanrio} name={"product"}/>
                <div className="product_line"><DashedLine/></div>
                <h3>상세보기</h3>
                <div className="detail" dangerouslySetInnerHTML={{ __html: sanrio.p_content }} />
            </div>
            
            <div className='product_buynow' onClick={()=>{setBuy(true)}}>
                <div className='Product_absolute'>
                    <Wish className={"product_wish"}/>
                    <p>구매하기</p>
                </div>
            </div>
            
            <PopupAction useState={buy} className={"product_popup_bg"}>
                    <div className='popup_close' onClick={()=>{setBuy(false)}}><BottomArrow className={"bottomArrow_close"}/></div> 
                <div className='product_popup'>
                    <p className='buy_name'>{sanrio.p_name}</p>
                    <div className="product_quantity">
                        <p>수량</p>
                        <QuantitySelector defaultCount={1} onChange={setCount} />
                    </div>
                    <div className='popup_line'><DashedLine/></div>
                    <div className='product_price'>
                        <p>총 상품 금액</p><p>{totalPrice.toLocaleString()}원</p>
                    </div>
                    <div className='product_btn'><TwoButton btn1={"장바구니"} btn2={"바로구매"} onClick2={buynow}/></div>
                </div>
            </PopupAction>
        </div>
    )
}

export default ProductPage