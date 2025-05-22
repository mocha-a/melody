import DashedLine from "../public/DashedLine"
import InputBox from "../public/InputBox"

function Method({ method, setMethod, senderName, setSenderName, cashReceipt, setCashReceipt, deductionType, setDeductionType, deductionValue, setDeductionValue }) {

  return (
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
  )
}

export default Method