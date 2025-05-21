import SolidLine from './SolidLine';

function Total({ productPrice, total = '합계', finalPrice, setFinalPrice }) {
    const Price = Number(productPrice);
    const deliveryFee = Price >= 50000 ? 0 : 3000;
    setFinalPrice((Price+deliveryFee).toLocaleString())
    
    return (
        <div className='total_grid'>
            <p className='total_title'>상품 금액</p>
            <p className='price_bold'>{Price.toLocaleString()}원</p>
            <p className='total_title delivery_fee'>배송비</p>
            <p>{deliveryFee.toLocaleString()}원</p>
            <SolidLine className={"total_line"}/>
            <p className='total_title'>{total}</p>
            <p className='price_bold'>{finalPrice}원</p>
        </div>
    )
}

export default Total