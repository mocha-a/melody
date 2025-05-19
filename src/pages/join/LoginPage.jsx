import { useNavigate } from 'react-router-dom';
import MenuTitle from "../../components/public/MenuTitle"
import InputBox from "../../components/public/InputBox"
import Button from "../../components/public/Button"
import '../../styles/join.scss';


function LoginPage() {
  const navigate = useNavigate();

  return (
    <>
      <MenuTitle title="로그인" />
      <div className="login_container">

        <div className="login_input">
          <InputBox label="아이디" className="login_id" />
          <InputBox label="비밀번호" className="login_pass" />
        </div>

        <div className="login_btn_wrapper">
          <div className="login_btn_container">
            <Button className="login_btn" btn="로그인" />
            <p className="join_link" onClick={() => navigate("/signup")}>회원가입</p>
          </div>
        </div>
      </div>
    </>
    );
}


export default LoginPage