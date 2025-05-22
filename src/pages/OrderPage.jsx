import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { instance } from '../api/sanrio';
import useWish from "../api/wish";
import MenuTitle from "../components/public/MenuTitle";
import Cancel from "../components/icon/Cancel";

import "../styles/order.scss";
import NoOrder from "../components/MyPage/NoOrder";

function OrderPage() {
    const { user } = useWish();
    const [refresh, setRefresh] = useState(0);
    const [ data, setData ] = useState([]);

    useEffect(()=>{
        async function order_item() {
            const res = await instance.get('/orderList.php', {
                params: { user: user }
            });
            
            setData(res.data.order_items);
        }
        order_item();
    },[refresh])
    
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

    async function deleteOrder(item){
        const confirmDelete = window.confirm("주문내역을 삭제하시겠습니까?");
        if (!confirmDelete) return;

        const res = await instance.delete('/orderList.php', {
                params: { order_id: item.order_id }
            });

        if (res.data.success) {
            alert("주문이 삭제되었습니다.");

            setData(prev => prev.filter(order => order.order_id !== item.order_id));
            setRefresh(prev => prev + 1);
        } 
    }
    
    return (
        <div>
            <MenuTitle title="주문 내역"/>
            {data?.length === 0 ? (
            <NoOrder/>
            ):(
            <div className="order_container">
                {data?.map(item=>
                <div className="order_itmeBox" key={item.order_id}>
                    <Link to={`/order/detail/${item.order_id}`}>
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
                )}
            </div>
            )}
        </div>


    )
}

export default OrderPage