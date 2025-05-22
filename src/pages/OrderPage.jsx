import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import useWish from "../api/wish";
import PaymentItem from "../components/paymentPage/PaymentItem";
import "../styles/payment.scss";
import { sanrioStore } from "../api/sanrio";
import MenuTitle from "../components/public/MenuTitle";
import QuantitySelector from "../components/public/CountingBtn";
import ColorCheckboxes from "../components/public/CheckBox";

import "../styles/order.scss";
import Cancel from "../components/icon/Cancel";

function OrderPage() {
    const { idData, sanrio } = sanrioStore();
    const { user } = useWish();
    const [ data, setData ] = useState([]);
    
    useEffect(()=>{
        // axios.get(`${process.env.REACT_APP_APIURL}/admin/api/order.php`)
        // .then(res=>{
        //     const order = res.data.orders
        //     const item = res.data.order_items

        //     const userOrder = order.filter(order => order.user_id === user);
        //     const userItem = item.filter(item => order.some(order=> order.order_id == item.order_id));
        //     setData({userOrder, userItem});
        // })
        idData('243')
    },[])    

    return (
        <div>
            <MenuTitle title="주문 내역"/>
            <div className="order_container">
                <Link to={`/order/123/detail/123`}>
                    <div className="order_box">
                        <p><img src={`${process.env.REACT_APP_APIURL}/admin/product/upload/${sanrio?.p_thumb}`} alt="" /></p>
                        <div className="order_item">
                            <Cancel className="order_delete"/>
                            <div className="order_date">5.21 00:50 주문</div>
                            <h3>헬로키티 체리 피규어 키링</h3>
                            <p>9,900원</p>
                            <button>상세보기</button>
                        </div>
                    </div>
                </Link>
            </div>
            {/* {data.userOrder.map(order => {
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
            <div>주문상품</div> */}
        </div>

    )
}

export default OrderPage