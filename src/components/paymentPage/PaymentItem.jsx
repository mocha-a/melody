import TagBtn from "../public/TagBtn"

function PaymentItem({ thmb, name, count }) {
    return (
        <div className="payment_product include">
            <h2>주문 상품 정보</h2>
            <div>
                <p className="payment_img"><img src={`${process.env.REACT_APP_APIURL}/admin/product/upload/${thmb}`} alt="" /></p>
                <div className="item_content">
                    <p>{name}</p>
                    <TagBtn tagbtn={"수량"} className={"quantity"}/><sapn>{count}개</sapn>
                </div>
            </div>
        </div>
    )
}

export default PaymentItem