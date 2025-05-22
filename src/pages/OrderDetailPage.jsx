import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sanrioStore } from "../api/sanrio";
import PaymentItem from "../components/paymentPage/PaymentItem"
import Total from "../components/public/Total";

function OrderDetailPage() {
    const { idData, sanrio } = sanrioStore();
    const [ finalPrice, setFinalPrice ] = useState(0);
    
    useEffect(()=>{
        idData('243')
    },[]) 

    return (
        <div>
            <div className="detail_container_bg">
                <div className="detail_state_bg bg">
                    <div className="datail_state">
                        <p>2025.05.21 00:50:14</p>
                        <p>주문번호 123</p>
                    </div>
                </div>
                <div className="detail_product_bg bg">
                    <div className="detail_product">
                        <Link to={`/product/243`}>
                            <PaymentItem thmb={sanrio.p_thumb} name={sanrio.p_name} count={"1"} />
                        </Link>
                    </div>
                </div>
                <div className="datail_address_bg bg">
                    <div className="datail_address">
                        <h2>배송지</h2>
                        <ul>
                            <li className="datail_name">안지현</li>
                            <li>010-6485-2563</li>
                            <li>서울특별시 광진구 긴고랑로 37길 20 (중곡동) 1층</li>
                            <li>(04943)</li>
                        </ul>
                    </div>
                </div>
                <div className="datail_method_bg bg">
                    <div className="datail_method">
                        <h2>결제정보</h2>
                        <Total productPrice={"24300"} finalPrice={finalPrice} setFinalPrice={setFinalPrice} total="총 주문금액" method={<span className="order_method">신용/체크카드</span>}/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OrderDetailPage