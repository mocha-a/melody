import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import { MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import axios from 'axios';
import InputBox from "../public/InputBox";
import TwoButton from "../public/TwoButton";

function Signup() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [phone, setPhone] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    
    const navigate = useNavigate();

    // 생년월일 처리
    const [birthYear, setBirthYear] = useState('');
    const [birthMonth, setBirthMonth] = useState('');
    const [birthDay, setBirthDay] = useState('');

    const years = Array.from({ length: 2024 - 1900 + 1 }, (_, i) => 2024 - i);
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const daysInMonth = (year, month) => new Date(Number(year), Number(month), 0).getDate();
    const days = birthYear && birthMonth ? Array.from({ length: daysInMonth(birthYear, birthMonth) }, (_, i) => i + 1) : [];

    // 유효성 검사 정규식
    const PASSWORD_REGEX = /^[A-Za-z0-9]{4,}$/;
    const PHONE_REGEX = /^[0-9]+$/;

    // 에러 문구 표시
    function signUpSubmit(e) {
        e.preventDefault();

        if (!userName && !id && !password && !phone) {
            setErrorMessage("정보를 입력하지 않았습니다.");
            setTimeout(() => setErrorMessage(false), 2000);
            return;
        }
        if (!userName) {
            setErrorMessage("이름을 입력해주세요.");
            setTimeout(() => setErrorMessage(false), 2000);
            return;
        }
        if (!id) {
            setErrorMessage("아이디를 입력해주세요.");
            setTimeout(() => setErrorMessage(false), 2000);
            return;
        }
        if (!password) {
            setErrorMessage("비밀번호를 입력해주세요.");
            setTimeout(() => setErrorMessage(false), 2000);
            return;
        }
        if (!PASSWORD_REGEX.test(password)) {
            setErrorMessage("비밀번호는 4자 이상, 영문 또는 숫자로 입력해주세요.");
            setTimeout(() => setErrorMessage(false), 2000);
            return;
        }
        if (!phone) {
            setErrorMessage("전화번호를 입력해주세요.");
            setTimeout(() => setErrorMessage(false), 2000);
            return;
        }

        if (!PHONE_REGEX.test(phone)) {
            setErrorMessage("전화번호는 숫자만 입력할 수 있습니다.");
            setTimeout(() => setErrorMessage(false), 2000);
            return;
        }
        if (phone.length < 6) {
            setErrorMessage("전화번호는 최소 6자 이상 입력해야 합니다.");
            setTimeout(() => setErrorMessage(false), 2000);
            return;
        }

        const birthDate = `${birthYear}-${String(birthMonth).padStart(2, '0')}-${String(birthDay).padStart(2, '0')}`;

        // FormData 생성
        const formData = new FormData();
        formData.append("id", id);
        formData.append("name", userName);
        formData.append("password", password);
        formData.append("tel", phone);
        formData.append("date", birthDate);

        // 가입한 회원 정보를 서버에 전송
        axios({
            method: "post",
            url: `${process.env.REACT_APP_APIURL}/api/member.php`,
            data: formData
        })
        // 성공 후 세션에 팝업창+로그인 창으로 이동
        .then(res => {
            sessionStorage.setItem("signup_notice", "1");
            navigate("/login");
        })
    }

    return (
        <div className="signup_container2">
            <form onSubmit={signUpSubmit}>
                <div className="signup_login_box">
                    <p>로그인 정보<span className="required">*</span></p>
                    <InputBox className="signup_id" placeholder="아이디" type="text" value={id}
                    onChange={(e) => setId(e.target.value)} />

                    <InputBox className="signup_pass" placeholder="비밀번호" type="password" value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                
                <div className="signup_name_box">
                    <p>이름<span className="required">*</span></p>
                    <InputBox className="signup_name" placeholder="이름" type="text" value={userName}
                    onChange={(e) => setUserName(e.target.value)} />
                </div>
                
                <div className="signup_phone_box">
                    <p>전화번호<span className="required">*</span></p>
                    <InputBox className="signup_phone" placeholder="전화번호" type="tel" value={phone}
                    onChange={(e) => {
                        if (PHONE_REGEX.test(e.target.value) || e.target.value === "")
                        setPhone(e.target.value);
                    }} />
                </div>

                <div className="signup_birth_box">
                    <p>생년월일</p>
                    <div className="birth_selects">
                        <FormControl className="birth_select year">
                            <InputLabel>연도</InputLabel>
                            <Select
                                value={birthYear}
                                onChange={(e) => setBirthYear(e.target.value)}
                                label="연도"
                                sx={{
                                    height: '50px', 
                                }}
                            >
                                {years.map((year) => (
                                <MenuItem key={year} value={year}>
                                    {year}
                                </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl className="birth_select month">
                            <InputLabel>월</InputLabel>
                            <Select
                                value={birthMonth}
                                onChange={(e) => setBirthMonth(e.target.value)}
                                label="월"
                                sx={{
                                    height: '50px', 
                                }}
                            >
                                {months.map((month) => (
                                <MenuItem key={month} value={month}>
                                    {month}
                                </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl className="birth_select day">
                            <InputLabel>일</InputLabel>
                            <Select
                                value={birthDay}
                                onChange={(e) => setBirthDay(e.target.value)}
                                label="일"
                                sx={{
                                    height: '50px', 
                                }}
                            >
                                {days.map((day) => (
                                <MenuItem key={day} value={day}>
                                    {day}
                                </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                    </div>
                </div>

                <div className="signup_bottom">
                    {/* 에러 메시지 */}
                    <AnimatePresence>
                        {errorMessage && (
                        <motion.div
                            className="error_message"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {errorMessage}
                        </motion.div>
                        )}
                    </AnimatePresence>

                    <TwoButton
                        btn1="이전"
                        btn2="가입하기"
                        type1="button"
                        type2="button"
                        onClick1={() => navigate(-1)}
                        onClick2={signUpSubmit}
                    />
                </div>
            </form>
        </div>
    );
}

export default Signup