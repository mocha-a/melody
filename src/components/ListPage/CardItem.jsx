import { useLocation } from 'react-router-dom';
import Wish from '../public/Wish'

function CardItem({ item, name }) {
    const location = useLocation();
    const id = location.pathname.split("/").filter(Boolean)[1];

    return (
        <div className={`${name}_item`}>
            <div className={`${name}_img`}>
                <p><img src={`http://anji.dothome.co.kr/admin/product/upload/${item?.p_thumb}`} alt="" /></p>
                { !id && <div className='card_wish' onClick={(e) => e.preventDefault()}><Wish/></div> }
            </div>
            <div className={`${name}_content`}>
                <b>{item?.p_name}</b>
                <p>{Number(item?.p_price).toLocaleString()}원</p>
                { id && <div className={'delivery_fee'}><span>배송비 3,000원</span><span>50,000원 이상 무료</span></div> }
            </div>
        </div>
    )
}

export default CardItem