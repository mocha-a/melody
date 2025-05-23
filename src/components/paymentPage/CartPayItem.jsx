import TagBtn from "../public/TagBtn";

function CartPayItem({ image, name, quantity }) {
    return (
        <div className="payment_product include">
            <div>
                <p className="payment_img">
                    <img
                        src={`${process.env.REACT_APP_APIURL_IMG}/${image}`}
                    />
                </p>
                <div className="item_content">
                    <p>{name}</p>
                    <TagBtn tagbtn={"수량"} className={"quantity"} />
                    <span>{quantity}개</span>
                </div>
            </div>
        </div>
    );
}

export default CartPayItem;
