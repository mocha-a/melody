import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import useWish from "../api/wish";
import Button from "../components/public/Button";
import InputBox from "../components/public/InputBox";
import Total from "../components/public/Total";
import DashedLine from "../components/public/DashedLine";
import BottomArrow from "../components/icon/BottomArrow";
import MemoArrow from "../components/icon/MemoArrow";
import PopupAction from "../components/ProductPage/PopupAction";
import PaymentItem from "../components/paymentPage/PaymentItem";

import "../styles/payment.scss";

function PaymentPage() {
    const { user } = useWish()
    const [ finalPrice, setFinalPrice ] = useState(0); // 총 가격
    const [ receiver, setReceiver ] = useState(""); // 수령인
    const [ phone, setPhone ] = useState(""); // 연락처
    const [ postCode, setPostCode ] = useState(""); // 우편번호
    const [ address, setAddress ] = useState(""); // 주소
    const [ detailAddress, setDetailAddress ] = useState(""); // 상세주소
    const [ inputSelect, setInputSelect ] = useState("");
    const [ memo, setMemo ] = useState(false);
    const [ customMemo, setCustomMemo ] = useState(""); //직접 입력
    const [ deductionValue, setDeductionValue ] = useState(""); //직접 입력
    const [ senderName, setSenderName ] = useState(""); //직접 입력
    const [ custom, setcustom ] = useState(false);
    const [ cashReceipt, setCashReceipt ] = useState(false); //현금영수증
    const [ deductionType, setDeductionType ] = useState("소득공제용");
    const [ method, setMethod ] = useState("신용/체크카드"); // 결제 수단
    const [ agreeAll, setAgreeAll ] = useState(false);
    const [ agreeRequired, setAgreeRequired ] = useState(false);
    
    const location = useLocation();
    const { name, thmb, count, totalPrice } = location.state;

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
        cashReceipt: cashReceipt
            ? {
                type: deductionType,
                value: deductionValue,
            }
            : null,
        cashReceipt: cashReceipt ? {
            type: deductionType,
            value: deductionValue
        } : null,
        product: [{
            name,
            count,
            thmb,
            price: totalPrice
        }],
        finalPrice,
        user
        };

        console.log("결제 데이터:", formData);

        axios.post(`${process.env.REACT_APP_APIURL}/admin/api/order.php`, formData)
        .then(res=>console.log(res.data))
    };
    
    const openPostcode = () => {
        new window.daum.Postcode({
            oncomplete: function (data) {
                const postcode = data.zonecode
                const fullAddress = data.address;
                const extraAddress = data.buildingName ? ` (${data.buildingName})` : '';
                const finalAddress = fullAddress + extraAddress;
                
                setPostCode(postcode);
                setAddress(finalAddress);
            },
        }).open();
    };

    const deliverySelect = (e) => {
        const value = e.target.innerText;
        setInputSelect(value);
        setMemo(false); // 이 함수에서 창 닫기 처리
    };
    
    return (
        <div className="payment_container_bg">
            <div className="payment_container">
                <div className="payment_product_container bg">
                    <PaymentItem thmb={thmb} name={name} count={count} />
                </div>
                <div className="payment_address_container bg">
                    <div className="payment_address include">
                        <h2>배송지</h2>
                        <InputBox
                            width="100%"
                            placeholder="수령인 이름을 입력해주세요."
                            bgColor = "#FFF2FA"
                            padding = "8px 14px"
                            height= "36px"
                            value={receiver}
                            onChange={e => setReceiver(e.target.value)}
                        />
                        <InputBox
                            width="100%"
                            type="tel"
                            placeholder="연락처를 입력해주세요."
                            bgColor = "#FFF2FA"
                            padding = "8px 14px"
                            height= "36px"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                        <div className="find">
                            <InputBox
                                placeholder="우편번호를 입력해주세요."
                                bgColor = "#FFF2FA"
                                disabled = "false"
                                justifyContent = "flex-start"
                                boxWidth = '193px'
                                padding = "8px 14px"
                                value={postCode}
                                height= "36px"
                            />
                            <div onClick={()=>{openPostcode()}}><Button btn={"주소찾기"} className={"findBtn"}/></div>
                        </div>
                        <InputBox
                            width="100%"
                            placeholder="주소를 입력해주세요."
                            bgColor = "#FFF2FA"
                            disabled = "false"
                            padding = "8px 14px"
                            value={address}
                            height= "36px"
                        />
                        <InputBox
                            width="100%"
                            placeholder="상세주소를 입력해주세요."
                            bgColor = "#FFF2FA"
                            padding = "8px 14px"
                            height= "36px"
                            value={detailAddress}
                            onChange={e => setDetailAddress(e.target.value)}
                        />
                        <div className="delivery_memo" >
                            <h2>배송 메모</h2>
                            <div className="memo_inputbox" onClick={()=>{setMemo(true)}}>
                                <InputBox
                                    width="100%"
                                    placeholder="배송 메모를 선택해주세요."
                                    value={inputSelect}
                                    bgColor = "#FFF2FA"
                                    readOnly = "true"
                                    padding = "8px 14px"
                                    height= "36px"
                                />
                                <MemoArrow className={"memoBtn"}/>
                            </div>
                            {custom &&
                            <InputBox
                                width="100%"
                                placeholder="배송 메모를 입력해주세요."
                                bgColor = "#FFF2FA"
                                padding = "8px 14px"
                                height= "36px"
                                value={customMemo} 
                                onChange={e => setCustomMemo(e.target.value)}
                            />}
                            <PopupAction useState={memo} className={"product_popup_bg"}>
                                <div className='popup_close' onClick={()=>{setMemo(false)}}><BottomArrow className={"bottomArrow_close"}/></div>
                                <div className="memoSelect">
                                    <h2>배송 메모를 선택해주세요.</h2>
                                    <ul className="inputbox">
                                        <li onClick={(e)=>{setcustom(false); deliverySelect(e);}}>문 앞에 놔주세요.</li>
                                        <li onClick={(e)=>{setcustom(false); deliverySelect(e);}}>택배함에 놔주세요.</li>
                                        <li onClick={(e)=>{setcustom(false); deliverySelect(e);}}>배송 전에 미리 연락 바랍니다.</li>
                                        <li onClick={(e)=>{setcustom(false); deliverySelect(e);}}>부재 시 핸드폰으로 연락주세요.</li>
                                        <li onClick={(e)=>{setcustom(false); deliverySelect(e);}}>부재 시 집 앞에 놔주세요.</li>
                                        <li onClick={(e)=>{setcustom(false); deliverySelect(e);}}>부재 시 경비실에 맡겨주세요.</li>
                                        <li onClick={(e)=>{setcustom(true); deliverySelect(e);}}>직접 입력</li>
                                    </ul>
                                </div>
                            </PopupAction>
                        </div>
                    </div>
                </div>
                <div className="payment_order_container bg">
                    <div className="payment_order include">
                        <h2>주문 요약</h2>
                        <Total productPrice={totalPrice} total={"총 결제 금액"} finalPrice={finalPrice} setFinalPrice={setFinalPrice}/>
                    </div>
                </div>
                <div className="payment_method_container bg">
                    <div className="payment_method include">
                        <h2>결제 수단</h2>
                        <div className="method_grid grid">
                            {["신용/체크카드", "실시간 계좌이체", "무통장 입금", "휴대폰결제"].map((item) => (
                            <label key={item}>
                                <input
                                type="radio"
                                name="method"
                                value={item}
                                checked={method === item}
                                onChange={(e) => setMethod(e.target.value)}
                                />
                                {item}
                            </label>
                            ))}
                        </div>
                        {method === "무통장 입금" && (
                        <>
                        <div className="bankbook">
                            <InputBox
                                width="100%"
                                value={"그린은행 39274810563172 멜로디"}
                                bgColor = "#FFF2FA"
                                disabled = "false"
                                padding = "8px 14px"
                                height= "36px"
                            />
                            <InputBox
                                width="100%"
                                placeholder="임금자명을 입력해주세요. (미입력시 수령인명)"
                                bgColor = "#FFF2FA"
                                padding = "8px 14px"
                                height= "36px"
                                value={senderName}
                                onChange={(e) => setSenderName(e.target.value)}
                            />
                            <p>주문 후 48시간 동안 미입금시 자동 취소됩니다.</p>
                        </div>
                        <div className="payment_dachedLine"><DashedLine/></div>
                        <div className="cashReceipt">
                            <label><input type="checkbox" checked={cashReceipt} onChange={(e)=>{setCashReceipt(e.target.checked)}}/>현금영수증 신청</label>
                            {cashReceipt &&
                            <>
                                <div className="cashReceipt_grid grid">
                                    <label className={deductionType === "소득공제용" ? "bold_label" : ""}>
                                        <input
                                        type="radio"
                                        name="cashReceipt"
                                        value="소득공제용"
                                        checked={deductionType === "소득공제용"}
                                        onChange={(e) => setDeductionType(e.target.value)
                                        }/>소득공제용
                                    </label>
                                    <label className={deductionType === "지출증빙용" ? "bold_label" : ""}>
                                        <input
                                        type="radio"
                                        name="cashReceipt"
                                        value="지출증빙용"
                                        checked={deductionType === "지출증빙용"}
                                        onChange={(e) => setDeductionType(e.target.value)
                                        }/>지출증빙용
                                    </label>
                                </div>
                                <InputBox
                                    width="100%"
                                    type="tel"
                                    placeholder= {deductionType === "소득공제용" ? "전화번호를 입력해주세요." : "사업자번호를 입력해주세요."}
                                    bgColor = "#FFF2FA"
                                    padding = "8px 14px"
                                    height= "36px"
                                    value={deductionValue}
                                    onChange={e => setDeductionValue(e.target.value)}
                                />
                            </>
                            }
                        </div>
                        </>
                        )}
                    </div>
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