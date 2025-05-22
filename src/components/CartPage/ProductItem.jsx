import CountingBtn from '../public/CountingBtn';
import Cancel from '../icon/Cancel';

function ProductItem({ item, changeCount, onRemove, onToggle }) {
    return (
        <div className="cart_item">
            <input type="checkbox" checked={item.checked} onChange={() => onToggle(item.id)} />

            <div className="cart_content">
                <img src={`${process.env.REACT_APP_APIURL}/admin/Product/upload/${item.p_thumb}`}/>

                <div className="info">
                    <div className="cart_cont_top">
                        <div className="name">{item.name}</div>
                        <Cancel
                            className="cart_remove_btn"
                            onClick={() => onRemove(item.id)}
                        />
                    </div>

                    <div className="cart_cont_bottom">
                        <div className="cart_count">
                            <p className="cart_text">수량:</p>
                            {/* 상품의 개수 업데이트 */}
                            <CountingBtn
                                // 장바구니에 담긴 기존 개수->초기값으로 넘겨준다
                                defaultCount={item.quantity}
                                // -,+ 클릭 시 newCount 호출 -> changeCount(상품아이디, 바뀐 개수) 전달
                                onChange={(newCount) => {
                                    changeCount(item.id, newCount);
                                }}
                            />

                        </div>

                        <div className="cart_price">
                            <p className="cart_text">상품금액 :</p>
                            <p className='item_price'>{(item.total_price || 0).toLocaleString()}원</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
