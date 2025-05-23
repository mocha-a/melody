import { useEffect, useState } from "react"
import { instance } from '../api/sanrio';
import useWish from "../api/wish";
import MenuTitle from "../components/public/MenuTitle";

import "../styles/order.scss";
import NoOrder from "../components/MyPage/NoOrder";
import OrderItem from "../components/MyPage/OrderItem";

function OrderPage() {
    const { user } = useWish();
    const [ refresh, setRefresh ] = useState(0);
    const [ data, setData ] = useState([]);

    useEffect(()=>{
        async function order_item() {
            const res = await instance.get('/orderList.php', {
                params: { user: user }
            });
            const multi = res.data.order_items.reduce((acc, item) => {
                const key = item.created_at;
                const existingGroup = acc.find(group => group.created_at === key);

                if (existingGroup) {
                    existingGroup.order_items.push(item);
                } else {
                    acc.push({
                        created_at: key,
                        order_items: [item]
                    });
                }

                return acc;
            }, []);

            setData(multi);
        }
        order_item();
    },[refresh])

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
                {data?.map((date, i)=>
                    <OrderItem
                        key={`date-${i}-0`}
                        item={date.order_items[0]}
                        deleteOrder={deleteOrder}
                        order_items={date.order_items} 
                    />
                )}
            </div>
            )}
        </div>
    )
}

export default OrderPage