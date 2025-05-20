import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TwoButton from "../public/TwoButton";
import { useNavigate } from "react-router-dom";

function Terms({ setSection }) {
    const navigate = useNavigate();
    const [checkItems, setCheckItems] = useState([]);
    const [errorMessage, setErrorMessage] = useState(false);

    const data = [
        {
        id: 0,
        title: "이용약관 동의 (필수)",
        contents: "서비스 이용약관 : 본 이용약관은 온라인 쇼핑몰 '멜로디'를 이용함에 있어 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.",
        required: true,
        },
        {
        id: 1,
        title: "개인정보 수집 및 이용 동의 (필수)",
        contents: "개인정보 수집 및 이용 동의 : (주)멜로디가 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제 18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.",
        required: true,
        },
        {
        id: 2,
        title: "마케팅 활용 동의 및 광고 수신 동의",
        contents: "마케팅 활용 동의 및 광고 수신 동의 : 서비스와 관련된 신상품 소식, 이벤트 안내, 고객 혜택 등 다양한 정보를 제공합니다.",
        required: false,
        },
    ];

    // 체크박스 개별 선택
    const selectChecked = (checked, id) => {
        if (checked) setCheckItems([...checkItems, id]);
        else setCheckItems(checkItems.filter((el) => el !== id));
    };

    // 체크박스 전체 선택
    const allChecked = (checked) => {
        if (checked) setCheckItems(data.map((el) => el.id));
        else setCheckItems([]);
    };

    // 다음 버튼 클릭 시
    const next = (e) => {
        e.preventDefault();
        const requiredIds = data
        .filter((item) => item.required)
        .map((item) => item.id);
        const allChecked = requiredIds.every((id) => checkItems.includes(id));

        if (allChecked) {
            setSection(2);
        } else {
            setErrorMessage(true);
            setTimeout(() => setErrorMessage(false), 2000);
        }
    };
    
    return (
        <>
        {/* 약관 동의 목록 */}
            <div className="term_container">
                <div className="term_top">
                    <label>
                        <input
                        type="checkbox"
                        name="all-checked"
                        onChange={(e) => allChecked(e.target.checked)}
                        checked={checkItems.length === data.length}
                        />
                        이용약관, 개인정보 수집 및 이용에 모두 동의합니다.
                    </label>
                </div>

                <form className="term_bottom">
                    {data.map((item) => (
                    <div className="term_item" key={item.id}>
                        <label className="term_label">
                            <input
                                type="checkbox"
                                name="select-checked"
                                onChange={(e) => selectChecked(e.target.checked, item.id)}
                                checked={checkItems.includes(item.id)}
                            />
                            {item.title}
                            {item.required && item.id !== 2 && <span className="required">*</span>}
                        </label>

                        <div className="term_contents">
                        {item.contents}
                        </div>
                    </div>
                    ))}

                    <div className="term_button_wrap">
                    {/* error 메시지 */}
                        <AnimatePresence>
                            {errorMessage && (
                            <motion.div
                                className="error_message"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <span className="required">*</span> 모든 필수 약관에 동의해야 합니다.
                            </motion.div>
                            )}
                        </AnimatePresence>

                        {/* 다음 버튼 */}
                        <TwoButton
                            className="term_btn"
                            btn1="이전" type1="button"
                            btn2="다음" type2="submit"
                            onClick1={() => navigate(-1)}
                            onClick2={next}
                        />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Terms