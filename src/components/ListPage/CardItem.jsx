import { useLocation } from 'react-router-dom';
import Wish from '../public/Wish'
import Cancel from '../icon/Cancel';

function CardItem({ item, name }) {
    const location = useLocation();
    const pathname = location.pathname.split("/").filter(Boolean)[0];
    
    return (
        <div className={`${name}_item`}>
            <div className={`${name}_img`}>
                <p><img src={`http://localhost/admin/product/upload/${item?.p_thumb}`} alt="" /></p>
                { pathname !== "product" || "wish" && <div className='card_wish' onClick={(e) => e.preventDefault()}><Wish/></div> }
                { pathname === "wish" && <div className='wish_cancel' onClick={(e) => e.preventDefault()}><Cancel/></div> }
            </div>
            <div className={`${name}_content`}>
                <b>{item?.p_name}</b>
                <p>{Number(item?.p_price).toLocaleString()}원</p>
                { pathname === "product" && <div className={'delivery_fee'}><span>배송비 3,000원</span><span>50,000원 이상 무료</span></div> }
            </div>
        </div>
    )
}

export default CardItem