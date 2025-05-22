import TagBtn from "../public/TagBtn"

function PaymentItem({ thumb, name, count }) {
    return (
        <div className="payment_product include">
            <h2>주문 상품 정보</h2>
            <div>
                <p className="payment_img"><img src={`${process.env.REACT_APP_APIURL_IMG}/${thumb}`} alt="" /></p>
                <div className="item_content">
                    <p>{name}</p>
                    <TagBtn tagbtn={"수량"} className={"quantity"}/><span>{count}개</span>
                </div>
            </div>
        </div>
    )
}

export default PaymentItem