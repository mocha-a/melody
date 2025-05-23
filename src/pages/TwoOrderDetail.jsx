import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { instance } from "../api/sanrio";
import useWish from "../api/wish";
import Total from "../components/public/Total";
import CartPayItem from "../components/paymentPage/CartPayItem";

function TwoOrderDetail() {
    const { user } = useWish();
    const [finalPrice, setFinalPrice] = useState(0);
    const [orders, setOrders] = useState([]);
    const [items, setItems] = useState([]);

    const location = useLocation();
    const order_id = location.pathname.split("/").filter(Boolean)[2];

    useEffect(() => {
        async function orderDetail() {
            const res = await instance.get("/order.php", {
                params: { user: user, order_id: order_id },
            });
            const orderData = res.data.orders.filter(
                (order) => order.order_id === order_id
            );
            setOrders(orderData);
            setItems(res.data.order_items);
        }

        orderDetail();
    }, []);

    // 데이터 병합
    const orderData = orders.map((order) => {
        const relatedItems = items.filter(
            (item) => item.order_id === order.order_id
        );
        return {
            ...order,
            items: relatedItems,
        };
    });

    // 날짜 포맷
    function formatDate(input) {
        const date = new Date(input);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
    }

    // 전화번호 포맷
    function PhoneNumber(phone) {
        if (!phone) return "";
        return phone.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
    }

    if (!orderData.length) return null;

    return (
        <div>
            {orderData.map((item) => {
                // 전체 가격 계산
                const totalPrice = item.items.reduce(
                    (sum, order) => sum + (Number(order.product_price) || 0), 0
                );
                return (
                    <div className="detail_container_bg" key={item.order_id}>
                        <div className="detail_state_bg bg">
                            <div className="detail_state">
                                <p>{formatDate(item.order_date)}</p>
                                <p>주문번호 {item.order_id}</p>
                            </div>
                        </div>

                        <div className="detail_product_bg bg">
                            <div className="detail_product">
                                {item.items.map((order) => (
                                    <Link to={`/product/${order.item_id}`} key={order.order_date}>
                                        <CartPayItem
                                            image={order.product_thumb}
                                            name={order.product_name}
                                            quantity={order.product_count}
                                        />
                                    </Link>
                                ))}
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
                                <Total
                                    productPrice={totalPrice}
                                    finalPrice={finalPrice}
                                    setFinalPrice={setFinalPrice}
                                    total="총 주문금액"
                                    method={<span className="order_method">{item.payment_method}</span>}
                                />
                                <p className="detail_payment_method">{item.payment_method}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default TwoOrderDetail;
