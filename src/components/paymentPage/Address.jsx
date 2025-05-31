import InputBox from "../public/InputBox";
import Button from "../public/Button";
import MemoArrow from "../icon/MemoArrow";
import PopupAction from "../ProductPage/PopupAction";
import BottomArrow from "../icon/BottomArrow";

function Address({ receiver, setReceiver, phone, setPhone, postCode, setPostCode, address, setAddress, detailAddress, setDetailAddress,
  inputSelect, setInputSelect, memo, setMemo, customMemo, setCustomMemo, custom, setcustom }) {

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
        setMemo(false);
    };
    
    return (
        <div className="payment_address_container bg">
        <div className="payment_address include">
            <h2>배송지</h2>
            <InputBox
                width="100%"
                placeholder="수령인 이름을 입력해주세요."
                bgColor="#FFF2FA"
                padding="8px 14px"
                height="36px"
                value={receiver}
                onChange={e => setReceiver(e.target.value)}
            />
            <InputBox
                width="100%"
                type="tel"
                placeholder="연락처를 입력해주세요."
                bgColor="#FFF2FA"
                padding="8px 14px"
                height="36px"
                value={phone}
                onChange={e => setPhone(e.target.value)}
            />
            <div className="find">
                <InputBox
                    placeholder="우편번호를 입력해주세요."
                    bgColor="#FFF2FA"
                    disabled={false}
                    justifyContent="flex-start"
                    boxWidth='193px'
                    padding="8px 14px"
                    value={postCode}
                    height="36px"
                />
                <div onClick={openPostcode}>
                    <Button btn={"주소찾기"} className={"findBtn"} />
                </div>
            </div>
            <InputBox
                width="100%"
                placeholder="주소를 입력해주세요."
                bgColor="#FFF2FA"
                disabled={false}
                padding="8px 14px"
                value={address}
                height="36px"
            />
            <InputBox
                width="100%"
                placeholder="상세주소를 입력해주세요."
                bgColor="#FFF2FA"
                padding="8px 14px"
                height="36px"
                value={detailAddress}
                onChange={e => setDetailAddress(e.target.value)}
            />
            <div className="delivery_memo">
                <h2>배송 메모</h2>
                <div className="memo_inputbox" onClick={() => setMemo(true)}>
                    <InputBox
                        width="100%"
                        placeholder="배송 메모를 선택해주세요."
                        value={inputSelect}
                        bgColor="#FFF2FA"
                        readOnly={true}
                        padding="8px 14px"
                        height="36px"
                    />
                    <MemoArrow className={"memoBtn"} />
                </div>
                {custom &&
                <InputBox
                    width="100%"
                    placeholder="배송 메모를 입력해주세요."
                    bgColor="#FFF2FA"
                    padding="8px 14px"
                    height="36px"
                    value={customMemo}
                    onChange={e => setCustomMemo(e.target.value)}
                />}

                {memo && <div className="overlay" onClick={()=>{setMemo(false)}}/>}
                <PopupAction useState={memo} className={"product_popup_bg"}>
                    <div className='popup_close' onClick={() => setMemo(false)}><BottomArrow className={"bottomArrow_close"} /></div>
                    <div className="memoSelect">
                        <h2>배송 메모를 선택해주세요.</h2>
                        <ul className="inputbox">
                            {[
                            "문 앞에 놔주세요.",
                            "택배함에 놔주세요.",
                            "배송 전에 미리 연락 바랍니다.",
                            "부재 시 핸드폰으로 연락주세요.",
                            "부재 시 집 앞에 놔주세요.",
                            "부재 시 경비실에 맡겨주세요.",
                            "직접 입력"
                            ].map((item, index) => (
                            <li key={index} onClick={(e) => {
                                if (item === "직접 입력") setcustom(true);
                                else setcustom(false);
                                deliverySelect(e);
                            }}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </PopupAction>
            </div>
        </div>
        </div>
    )
}

export default Address