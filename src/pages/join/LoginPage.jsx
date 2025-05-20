import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/join.scss";

import MenuTitle from "../../components/public/MenuTitle";
import InputBox from "../../components/public/InputBox";
import Button from "../../components/public/Button";

function LoginPage() {
  const navigate = useNavigate();
  
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [signupModal, setSignupModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  useEffect(() => {
    if (sessionStorage.getItem("signup_notice")) {
      setSignupModal(true);
      setTimeout(() => {
        setSignupModal(false);
        sessionStorage.removeItem("signup_notice");
      }, 1000);
    }
  }, []);

  
  // 이미 로그인 된 사용자 접근 제한
  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      // 로그인이 되어있을 시 = access_login을 true로
      sessionStorage.setItem("access_login", "1");
      navigate("/");
    }
  }, []);

  const startLogin = async (e) => {
    // 유효성 검사
    if (!id || !pw) {
      setErrorMessage("아이디와 비밀번호를 모두 입력해주세요.");
      setTimeout(() => setErrorMessage(""), 2000);
      return;
    }

    const formData = new FormData();
    formData.append("id", id);
    formData.append("pw", pw);
    const res = await axios.post(`${process.env.REACT_APP_APIURL}/admin/api/member_login.php`, formData);
    const { status, message } = res.data;

    // 로그인 성공 시 & 실패 시
    if (status === "success") {
      console.log(status);
      sessionStorage.setItem("user", id);
      sessionStorage.setItem("login_success", "1");
      navigate("/");
    } else {
      setErrorMessage(message || "아이디 또는 비밀번호가 틀렸습니다.");
      setTimeout(() => setErrorMessage(""), 2000);
    }
  };


  return (
    <>
      <MenuTitle title="로그인" />

      {/* 가입 후 로그인 유도 메시지 */}
      {signupModal && (
        <div className="modal">
          <div className="alert_box">가입한 정보로 로그인해주세요.</div>
        </div>
      )}

      <div className="login_container">
        <div className="login_input">
          <InputBox
            label="아이디"
            className="login_id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <InputBox
            label="비밀번호"
            className="login_pass"
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
        </div>

        <div className="login_btn_wrapper">
          <div className="login_btn_container">

            {/* 에러 메시지 */}
            <AnimatePresence mode="wait">
              {errorMessage && (
                <motion.div
                  key={errorMessage}
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

            <Button className="btn" btn="로그인" onClick={startLogin} />
            <p className="join_link" onClick={() => navigate("/signup")}>회원가입</p>

          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
