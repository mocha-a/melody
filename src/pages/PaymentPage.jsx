import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import useWish from "../api/wish";
import Button from "../components/public/Button";
import Total from "../components/public/Total";
import PaymentItem from "../components/paymentPage/PaymentItem";
import Address from "../components/paymentPage/Address";
import Method from "../components/paymentPage/Method";

import "../styles/payment.scss";

function PaymentPage() {
    const { user } = useWish()

    const [ receiver, setReceiver ] = useState("");                    // 수령인
    const [ phone, setPhone ] = useState("");                          // 연락처
    const [ postCode, setPostCode ] = useState("");                    // 우편번호
    const [ address, setAddress ] = useState("");                      // 주소
    const [ detailAddress, setDetailAddress ] = useState("");          // 상세주소
    const [ inputSelect, setInputSelect ] = useState("");              // 배송메모 선택 내용
    const [ customMemo, setCustomMemo ] = useState("");                // 배송메모 직접 입력
    const [ deductionValue, setDeductionValue ] = useState("");        // 현금영수증 번호
    const [ senderName, setSenderName ] = useState("");                // 무통장입금 입금자명
    const [ memo, setMemo ] = useState(false);                         // 배송메모 슬라이드
    const [ custom, setCustom ] = useState(false);                     // 배송메모 input 박스
    const [ cashReceipt, setCashReceipt ] = useState(false);           // 현금영수증 신청
    const [ deductionType, setDeductionType ] = useState("소득공제용");  // 현금영수증 타입
    const [ method, setMethod ] = useState("신용/체크카드");             // 결제 수단
    const [ agreeAll, setAgreeAll ] = useState(false);                 // 결제 동의
    const [ agreeRequired, setAgreeRequired ] = useState(false);       // 결제 동의
    const [ finalPrice, setFinalPrice ] = useState(0);                 // 총 가격
    
    const location = useLocation();
    const { name, thumb, count, item_id, totalPrice } = location.state;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])

    
    const handlePayment = () => {
        if (!agreeRequired) {
            alert("필수 동의 항목을 체크해주세요.");
            return;
        }
        const fullMemo = custom ? customMemo : inputSelect;

        const formData = {
        receiver,
        phone,
        postCode,
        address,
        detailAddress,
        deliveryMemo: fullMemo,
        paymentMethod: method,
        paymentSender: method === "무통장 입금" ? (senderName || receiver) : null,
        cashReceipt: cashReceipt ? {
            type: deductionType,
            value: deductionValue
        } : null,
        product: [{
            name,
            count,
            thumb,
            item_id,
            price: totalPrice
        }],
        finalPrice,
        user
        };

        console.log("결제 데이터:", formData);

        axios.post(`${process.env.REACT_APP_APIURL}/api/order.php`, formData)
        .then(res=>console.log(res.data))
    };
    
    return (
        <div className="payment_container_bg">
            <div className="payment_container">
                <div className="payment_product_container bg">
                    <PaymentItem thumb={thumb} name={name} count={count} />
                </div>
                <Address
                    receiver={receiver}                 // 주문자명
                    setReceiver={setReceiver}
                    phone={phone}                       //전화번호
                    setPhone={setPhone}
                    postCode={postCode}                 //우편번호
                    setPostCode={setPostCode}
                    address={address}                   //주소
                    setAddress={setAddress}
                    detailAddress={detailAddress}       //상세주소
                    setDetailAddress={setDetailAddress}
                    inputSelect={inputSelect}           //메모선택
                    setInputSelect={setInputSelect}
                    memo={memo}                         //메모 슬라이드
                    setMemo={setMemo}
                    customMemo={customMemo}             //메모 직접 입력
                    setCustomMemo={setCustomMemo}
                    custom={custom}                     //배송메모 input 박스
                    setcustom={setCustom}
                />
                <div className="payment_order_container bg">
                    <div className="payment_order include">
                        <h2>주문 요약</h2>
                        <Total productPrice={totalPrice} total={"총 결제 금액"} finalPrice={finalPrice} setFinalPrice={setFinalPrice}/>
                    </div>
                </div>
                <div className="payment_method_container bg">
                    <Method
                        method={method}                          // 결제 수단
                        setMethod={setMethod}
                        senderName={senderName}                  // 무통장입금 입금자명
                        setSenderName={setSenderName}
                        cashReceipt={cashReceipt}                // 현금영수증 신청
                        setCashReceipt={setCashReceipt}
                        deductionType={deductionType}            // 현금영수증 타입
                        setDeductionType={setDeductionType}
                        deductionValue={deductionValue}          // 현금영수증 번호
                        setDeductionValue={setDeductionValue}
                    />
                </div>
                <div className="payment_agree_container bg">
                    <div className="payment_agree include">
                        <label><input type="checkbox" checked={agreeAll} onChange={e => setAgreeAll(e.target.checked)} />주문내용 확인 및 결제 동의</label>
                        <label><input type="checkbox" checked={agreeRequired} onChange={e => setAgreeRequired(e.target.checked)}/>(필수) 구매조건 확인 및 결제진행 동의</label>
                    </div>
                </div>
            </div>
            <div className="paymentBtn" onClick={()=>{handlePayment()}}><Button btn={`${finalPrice.toLocaleString()}원 결제하기`}/></div>
        </div>
    )
}

export default PaymentPage