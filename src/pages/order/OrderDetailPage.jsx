import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { instance } from "../../api/sanrio";
import useWish from "../../api/wish";
import PaymentItem from "../../components/paymentPage/PaymentItem"
import MenuTitle from "../../components/public/MenuTitle";
import Total from "../../components/public/Total";

function OrderDetailPage() {
    const { user } = useWish();
    const [ finalPrice, setFinalPrice ] = useState(0);
    const [ orders, setOrders ] = useState([]);
    const [ items, setItems ] = useState([]);

    const location = useLocation();
    const order_id = location.pathname.split("/").filter(Boolean)[2];
    
    useEffect(()=>{
        async function orderDetail() {
            const res = await instance.get('/order.php', {
                params: { user: user, order_id: order_id }
            });
            
            // res.data.orders 중 order_id의 값과 같은것을 찾음
            const orderData = res.data.orders.filter(order => order.order_id === order_id);
            setOrders(orderData);
            setItems(res.data.order_items);
        }

        orderDetail();
    },[]) 
    
    // 데이터 병합
    const orderData = orders.map(order => {
    const relatedItems = items.filter(item => item.order_id === order.order_id);
    return {
            ...order,
            items: relatedItems
        };
    });

    // 날짜포맷
    function formatDate(input) {
        const date = new Date(input);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
    }

    // 휴대번호 포맷
    function PhoneNumber(phone) {
        if (!phone) return '';
        return phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    }

    // orderData에 데이터가 없을때 리턴
    if(!orderData.length){return}
    return (
        <div>
            <MenuTitle title="상세 주문 내역"/>
            {orderData?.map(item=>
            <div className="detail_container_bg">
                <div className="detail_state_bg">
                    <div className="detail_state">
                        <p>{formatDate(item.order_date)}</p>
                        <p>주문번호 {item.order_id}</p>
                    </div>
                </div>
                <div className="detail_product_bg bg">
                    <div className="detail_product">
                    {item.items?.map(order=>
                        <Link to={`/product/${order.item_id}`} key={order.order_date}>
                            <PaymentItem thumb={order.product_thumb} name={order.product_name} count={"1"} />
                        </Link>
                    )}
                    </div>
                </div>
                <div className="detail_address_bg bg">
                    <div className="detail_address">
                        <h2>배송지</h2>
                        <ul>
                            <li className="detail_name">{item.receiver}</li>
                            <li>{PhoneNumber(item.phone)}</li>
                            <li>{`${item.address}, ${item.detail_address} (${item.post_code})`}</li>
                            <li>{item.delivery_memo}</li>
                        </ul>
                    </div>
                </div>
                <div className="detail_method_bg bg">
                    <div className="detail_method">
                        <h2>결제정보</h2>
                        {item.items?.map(order=>
                        <Total 
                        key={order.order_date}
                        productPrice={order.product_price} 
                        finalPrice={finalPrice} 
                        setFinalPrice={setFinalPrice} 
                        total="총 주문금액" 
                        method={<span className="order_method">{item.payment_method}</span>}
                        />
                        )}
                        <p className="detail_payment_method">{item.payment_method}</p>
                    </div>
                </div>
            </div>
            )}
        </div>

    )
}

export default OrderDetailPage