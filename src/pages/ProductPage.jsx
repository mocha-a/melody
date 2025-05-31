import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { sanrioStore } from '../api/sanrio';
import CountingBtn from '../components/public/CountingBtn';
import DashedLine from '../components/public/DashedLine';
import TwoButton from '../components/public/TwoButton';
import TopButton from '../components/public/TopButton';
import BottomArrow from '../components/icon/BottomArrow';
import PopupAction from '../components/ProductPage/PopupAction';
import WishButton from '../components/ListPage/WishButton';
import CardItem from '../components/ListPage/CardItem';
import KeywordItem from '../components/ProductPage/KeywordItem';
import CircularColor from '../components/Join/Loading';

import "../styles/product.scss";
import SnackBar from '../components/public/SnackBar';

function ProductPage() {
    const { sanrio, idData } = sanrioStore();
    const [ buy, setBuy ] = useState(false); 
    const [ show, setShow ] = useState(true);
    const [ price, setPrice ] = useState(0);
    const [ count, setCount ] = useState(1);
    const unitPrice = Number(sanrio?.p_price) ?? 0;
    const totalPrice = unitPrice * count;

    const navigate = useNavigate();
    const location = useLocation();
    const id = location.pathname.split("/").filter(Boolean)[1];

    const [cartModal, setCartModal] = useState(false);
    const [alreadyModal, setAlreadyModal] = useState(false);

    const user_id = sessionStorage.getItem("user");

    useEffect(()=>{
        window.scrollTo(0, 0);
        idData(id)
    },[location])

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false); // 0.2초 뒤에 숨기기
        }, 200);

        return () => clearTimeout(timer); // 컴포넌트 언마운트 시 클린업
    }, []);

    useEffect(() => {
        if (sanrio?.p_price) {
            setPrice(sanrio.p_price);
        }
    }, [sanrio]);
    
    
    function buynow(){
        if (!user_id) {
            const result = window.confirm("로그인이 필요합니다. 로그인하시겠습니까?");
            if (result) {
                navigate("/login");
            }
            return;
        }
        navigate("/payment", { 
            state: {
                name: sanrio?.p_name,
                thumb: sanrio?.p_thumb,
                item_id: sanrio?.id,
                count,
                totalPrice
            }
        });
    }

    function addToCart() {
        // 비 로그인 상태
        if (!user_id) {
            const result = window.confirm("로그인이 필요합니다. 로그인하시겠습니까?");
            if (result) {
                navigate("/login");
            }
            return;
        }
        // 로그인 상태
        fetch(`${process.env.REACT_APP_APIURL}/api/cart/add.php`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user_id,
                product_id: sanrio?.id,
                quantity: count,
                total_price: totalPrice
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                setBuy(false)
                setCartModal(true);
                setTimeout(() => setCartModal(false), 2000);
            } else if (data.reason === "already_exists") {
                setAlreadyModal(true);
                setTimeout(() => setAlreadyModal(false), 1000);
            }
        })
    }

    return (
        <>
        {show ? (
        <div className='list_loading'><CircularColor/></div>
        ):(
        <>
        <div className='product_container'>
            <div className="product_detail">
                <CardItem item={sanrio} name={"product"}/>
                <KeywordItem item={sanrio}/>
                <div className="product_line"><DashedLine/></div>
                <h3>상세보기</h3>
                <div className="detail" dangerouslySetInnerHTML={{ __html: sanrio.p_content }} />
            </div>
        
            <div className='product_buynow' onClick={()=>{setBuy(true)}}>
                <div className='product_absolute'>
                    <div className="product_wish"><WishButton item={sanrio}/></div>
                    <p>구매하기</p>
                </div>
            </div>
            
            {buy && <div className="overlay" onClick={()=>{setBuy(false)}}/>}
            <PopupAction useState={buy} className={"product_popup_bg"}>
                    <div className='popup_close' onClick={()=>{setBuy(false)}}><BottomArrow className={"bottomArrow_close"}/></div>
                <div className='product_popup'>
                    <p className='buy_name'>{sanrio.p_name}</p>
                    <div className="product_quantity">
                        <p>수량</p>
                        <CountingBtn defaultCount={count} onChange={(newCount) => setCount(newCount)}/>
                    </div>
                    <div className='popup_line'><DashedLine/></div>
                    <div className='product_price'>
                        <p>총 상품 금액</p><p>{totalPrice.toLocaleString()}원</p>
                    </div>
                    <div className='product_btn'>
                        <TwoButton btn1={"장바구니"} btn2={"바로구매"}
                        onClick1={addToCart} onClick2={buynow} />
                    </div>
                </div>
            </PopupAction>

        </div>
        
         <TopButton/>
        {/* 모달창 */}
        {cartModal && (
            <SnackBar modal="🛒 장바구니로 쏘옥 - !"/>
        )}
        {alreadyModal && (
        <div className="modal">
            <div className="alert_box">이미 담겨있는 상품입니다.</div>
        </div>
        )}
        </>
        )}
        </>
    )
}



export default ProductPage