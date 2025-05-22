import { useLocation } from 'react-router-dom';
import WishButton from './WishButton';
import CancelButton from '../MyPage/CancelButton';

function CardItem({ item, name }) {
    const location = useLocation();
    const pathname = location.pathname.split("/").filter(Boolean)[0];
    
    return (
        <>
        <div className={`${name}_item`}>
            <div className={`${name}_img`}>
                <p><img src={`${process.env.REACT_APP_APIURL}/admin/product/upload/${item?.p_thumb}`} alt="" /></p>
                { !(pathname === "product" || pathname === "wish") && <WishButton item={item}/>}
                { pathname === "wish" && <CancelButton item={item}/> }
            </div>
            <div className={`${name}_content`}>
                <b>{item?.p_name}</b>
                <p>{Number(item?.p_price).toLocaleString()}원</p>
                { pathname === "product" && <div className={'delivery_fee'}><span>배송비 3,000원</span><span>50,000원 이상 무료</span></div> }
            </div>
        </div>
        </>
    )
}

export default CardItem