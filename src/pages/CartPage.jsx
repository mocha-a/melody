import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckText from '../components/CartPage/CheckText';
import CartIcon2 from '../components/icon/CartIcon2';
import RemoveBtn from '../components/CartPage/RemoveBtn';
import ProductItem from '../components/CartPage/ProductItem';
import SolidLine from '../components/public/SolidLine';
import DashedLine from '../components/public/DashedLine';
import Button from "../components/public/Button";
import Total from "../components/public/Total";
import "../styles/cart.scss";

function CartPage() {
    const [cartItems, setCartItems] = useState([]);
    const [allChecked, setAllChecked] = useState(false);
    const [ finalPrice, setFinalPrice ] = useState(0);

    const navigate = useNavigate();

    const selectedItems = cartItems.filter(item => item.checked); // 선택된 항목 아이템
    const isAllSelected = selectedItems.length === cartItems.length && cartItems.length > 0;
    const isNoneSelected = selectedItems.length === 0; // 선택 x

    // 선택 결과에 따른 버튼 텍스트 변경
    const buttonText = isNoneSelected || isAllSelected
        ? '전체 상품 결제하기'
        : '선택 상품 결제하기';

    const total = selectedItems.reduce((sum, item) =>
        sum + (Number(item.total_price) || (Number(item.p_price) || 0) * item.quantity), 0
    );

    // 상품 선택 후 결제
    const goPaymentPage = () => {

        const itemsToPay = (selectedItems.length > 0 ? selectedItems : cartItems).map(item => ({
            ...item,
            name: item.name || item.p_name,
            image: item.image || item.p_thumb,
        }));

        const totalPrice = itemsToPay.reduce((sum, item) =>
            sum + (Number(item.total_price) || Number(item.p_price) * item.quantity), 0
        );

        navigate("/cartpayment", {
            state: {
                items: itemsToPay,
                totalPrice
            }
        });
    };

    // 장바구니 전체 선택/해제
    const toggleAll = () => {
        const newCheck = !allChecked;
        setAllChecked(newCheck);

        // checked 상태를 newCheck(선택O)으로 변경
        setCartItems(prev =>
            prev.map(item => ({
                ...item,
                checked: newCheck,
            }))
        );
    };

    // 체크박스 토글
    const toggleItemCheck = (id) => {
        setCartItems(prev => {
            // item의 id가 일치하는 것만 checked 값 반전시키기
            const updated = prev.map(item =>
                item.id === id ? { ...item, checked: !item.checked } : item
            );
            // 모든 아이템의 checked가 true인지 확인하기
            const allNowChecked = updated.every(item => item.checked);
            setAllChecked(allNowChecked);
            return updated;
        });
    };

    // 장바구니 데이터(cart)를 db에서 불러오기
    useEffect(() => {
        const user_id = sessionStorage.getItem("user");
        // 비 로그인 시 돌려보내기
        if (!user_id) return;

        fetch(`${process.env.REACT_APP_APIURL}/api/cart/list.php?user_id=${user_id}`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    const formatted = data.items.map(item => ({
                        ...item,
                        name: item.p_name,
                        image: item.p_thumb,
                        quantity: item.quantity,
                        p_price: item.p_price,
                        checked: false // checkbox 꺼진 상태로 전달
                    }));
                    setCartItems(formatted);
                }
            });
    }, []);

    // 상품 삭제시키기 (db연동)
    const removeItem = (id) => {
        const user_id = sessionStorage.getItem("user");

        fetch(`${process.env.REACT_APP_APIURL}/api/cart/delete.php`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user_id, item_id: id }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setCartItems(prev => prev.filter(item => item.id !== id));
                }
            });
    };

    // 상품 *선택 삭제시키기 (db연동)
    const removeSelectedItem = () => {
        const user_id = sessionStorage.getItem("user");
        const selectedIds = cartItems.filter(item => item.checked).map(item => item.id);

        selectedIds.forEach(id => {
            fetch(`${process.env.REACT_APP_APIURL}/api/cart/delete.php`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ user_id, item_id: id }),
            });
        });

        setCartItems(prev => prev.filter(item => !item.checked));
    };

    // 상품 수량 변경 (db연동)
    const changeCountValue = (id, newQuantity) => {
        setCartItems(prev =>
            prev.map(item => {
                if (item.id === id) {
                    const onePrice = Number(item.p_price) || 0;
                    const newTotalPrice = onePrice * newQuantity;

                    fetch(`${process.env.REACT_APP_APIURL}/api/cart/update_count.php`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            cart_id: id,
                            quantity: newQuantity,
                            total_price: newTotalPrice,
                        }),
                    });

                    return {
                        ...item,
                        quantity: newQuantity,
                        total_price: newTotalPrice,
                    };
                }
                return item;
            })
        );
    };

    return (
        cartItems.length === 0 ? (
            <div className="empty_cart_box">
                <div className="empty_cart_icon" />
                <CartIcon2 className="cart_icon" />
                <p className="empty_text">장바구니가{"\n"}비어있습니다.</p>
                <div className="continue_btn">
                    <DashedLine className="dashed_line" />
                    <p onClick={() => window.location.href = '/'}>계속 쇼핑하기</p>
                </div>
            </div>
        ) : (
            <div className="cart_containar">
                <div className="cart_container_top">
                    <div className='cart_top'>
                        <CheckText
                            className="all_select_btn"
                            label="전체 선택"
                            checked={allChecked}
                            onChange={toggleAll}
                        />
                        <RemoveBtn className="remove_btn" onClick={removeSelectedItem} />
                    </div>
                </div>
                <SolidLine className="cart_line" />

                <div className="cart_product_container_bg">
                    <div className="cart_content_container bg">
                        <div className="cart_content_box">
                            {cartItems.map(item => (
                                <ProductItem
                                    key={item.id}
                                    item={item}
                                    changeCount={changeCountValue}
                                    onRemove={removeItem}
                                    onToggle={toggleItemCheck}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="cart_order_container bg">
                        <div className="cart_total_box">
                            <h2>결제 예상 금액</h2>
                            <Total
                            productTitle="총 상품 금액"
                            length={selectedItems.length}
                            productPrice={total}
                            finalPrice={finalPrice}
                            setFinalPrice={setFinalPrice}
                            total="합계"
                            />
                        </div>
                    </div>
                </div>

                <div className="total_btn">
                    <Button
                        btn={buttonText}
                        className="pay_button"
                        onClick={goPaymentPage}
                    />
                </div>
            </div>
        )
    );
}

export default CartPage;
