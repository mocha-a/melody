import axios from "axios"
import { useEffect, useState } from "react"
import useWish from "../api/wish";
import PaymentItem from "../components/paymentPage/PaymentItem";
import "../styles/payment.scss";
function OrderPage() {
    const { user } = useWish();
    const [ data, setData ] = useState([]);
    
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_APIURL}/admin/api/order.php`)
        .then(res=>{
            const order = res.data.orders
            const item = res.data.order_items

            const userOrder = order.filter(order => order.user_id === user);
            const userItem = item.filter(item => order.some(order=> order.order_id == item.order_id));
            setData({userOrder, userItem});
        })
    },[])
    
    // if(!data.length) return;

    return (
        <div>
            {data.userOrder.map(order => {
            const relatedItems = data.userItem.filter(item => item.order_id === order.order_id);

            return (
                <div key={order.order_id} className="order-block">
                <h3>주문자: {order.receiver}</h3>
                <p>주소: {order.address}</p>
                <p>전화번호: {order.phone}</p>

                <div className="items">
                    {relatedItems.map(item => (
                    <div key={item.item_id} className="item">
                        <PaymentItem thmb={item.product_thumb} name={item.product_name} count={item.product_count} />
                    </div>
                    ))}
                </div>
                </div>
            );
            })}
            <div>주문상세정보</div>
            <div>주문상품</div>
        </div>

    )
}

export default OrderPage