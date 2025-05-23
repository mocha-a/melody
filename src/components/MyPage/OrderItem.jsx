import { Link } from "react-router-dom";
import Cancel from "../icon/Cancel";


function OrderItem({ item, deleteOrder, order_items}) {
    function formatDate(input) {
        const date = new Date(input);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${month}.${day} ${hours}:${minutes}:${seconds}`;
    }

    function price(data) {
        const price = Number(data);
        const formatted = price.toLocaleString();
        return formatted
    }

    // 아이템 개수에 따른 주문 내역 분리
    const detailPath = order_items?.length > 1 
        ? `/order/details/${item.order_id}` 
        : `/order/detail/${item.order_id}`;

        
    return (
        <div className="order_itmeBox">
            <Link to={detailPath}>
                <div className="order_box">
                    <p><img src={`${process.env.REACT_APP_APIURL_IMG}/${item?.product_thumb}`} alt="" /></p>
                    <div className="order_item">
                        <Cancel className="order_delete" onClick={(e)=>{e.preventDefault(); e.stopPropagation(); deleteOrder(item)}}/>
                        <div className="order_date">{formatDate(item.created_at)} 주문</div>
                        <h3>{item.product_name}</h3>
                        <p>{price(item.product_price)}원</p>
                        <button>상세보기</button>
                    </div>
                </div>
            </Link>
        </div>
    )
}


export default OrderItem