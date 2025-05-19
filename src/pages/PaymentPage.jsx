import { useState } from "react";
import Button from "../components/public/Button";
import TagBtn from "../components/public/TagBtn"
import InputBox from "../components/public/InputBox";

import "../styles/payment.scss";
import BottomArrow from "../components/icon/BottomArrow";
import MemoArrow from "../components/icon/MemoArrow";
import PopupAction from "../components/ProductPage/PopupAction";
import Total from "../components/public/Total";
import DashedLine from "../components/public/DashedLine";

function PaymentPage() {
    const [ postCode, setPostCode ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ inputSelect, setInputSelect ] = useState("");
    const [ memo, setMemo ] = useState(false);
    const [ custom, setcustom ] = useState(false);
    const [ cashReceipt, setCashReceipt ] = useState(false); //현금영수증
    const [ deductionType, setDeductionType ] = useState("소득공제용");
    const [ method, setMethod ] = useState("신용/체크카드"); // 결제 수단
    
    const [ select, setSelect ] = useState("소득공제용")

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
    console.log(custom);
    
    return (
        <div className="payment_container_bg">
            <div className="payment_container">
                <div className="payment_product_container bg">
                    <div className="payment_product include">
                        <h2>주문 상품 정보</h2>
                        <div>
                            <p><img src="" alt="" /></p>
                            <p></p>
                            <div>
                                <TagBtn tagbtn={"수량"} className={"quantity"}/>
                            </div>
                        </div>
                    </div>
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
                        />
                        <InputBox
                            width="100%"
                            type="tel"
                            placeholder="연락처를 입력해주세요."
                            bgColor = "#FFF2FA"
                            padding = "8px 14px"
                            height= "36px"
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
                        <Total productPrice={1234} total={"총 결제 금액"}/>
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
                            />
                            <p>주문 후 48시간 동안 미입금시 자동 취소됩니다.</p>
                        </div>
                        )}
                        <div className="payment_dachedLine"><DashedLine/></div>
                        <div className="cashReceipt">
                            <label><input type="checkbox" onChange={(e)=>{setCashReceipt(e.target.checked)}}/>현금영수증 신청</label>
                            {cashReceipt && 
                            <>
                                <div className="cashReceipt_grid grid">
                                    <label>
                                        <input
                                        type="radio"
                                        name="cashReceipt"
                                        value="소득공제용"
                                        checked={deductionType === "소득공제용"}
                                        onChange={(e) => setDeductionType(e.target.value)
                                        }/>소득공제용
                                    </label>
                                    <label>
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
                                />
                            </>
                            }
                        </div>
                    </div>
                </div>
                <div className="payment_agree_container bg">
                    <div className="payment_agree include">
                        <label><input type="checkbox"/>주문내용 확인 및 결제 동의</label>
                        <label><input type="checkbox"/>(필수) 구매조건 확인 및 결제진행 동의</label>
                    </div>
                </div>
            </div>
            <div className="paymentBtn"><Button btn={`${0}원 결제하기`}/></div>
        </div>
    )
}

export default PaymentPage