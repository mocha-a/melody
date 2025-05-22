import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import MypageWish from "../components/icon/MypageWish";
import ListDividers from "../components/MyPage/MemberBox";
import Button from "../components/public/Button";
import MenuTitle from "../components/public/MenuTitle"

import "../styles/mypage.scss";
import Footer from "../components/public/Footer";
import MypageOrder from "../components/icon/MypageOrder";

function MyPage() {
    const [ userData, setUserData ] = useState([]);
    const user = sessionStorage.getItem("user");
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_APIURL}/admin/api/member.php`, user)
        .then(res=>
            setUserData(res.data)
        )
    },[user])

    const logout = () => {
        sessionStorage.removeItem("user");
        sessionStorage.setItem("logout_notice", "1");
        navigate("/");
    };

    if(!userData.length) return;
    return (
    <>
        <MenuTitle title={"마이페이지"}/>
        <div className="mypage_container">
            <div className="mypage_hello">
                <h2>안녕하세요.<br/><b>{userData[0]?.m_name}</b> 님!</h2>
                <p>회원님의 로그인 정보</p>
            </div>
            <ListDividers user={userData[0]}/>
            <div className="mypage_onclick" onClick={()=>{navigate(`/wish/${user}`)}}>
                <Button
                    btn={
                    <span className="mypage_btn">
                        <MypageWish className={"mypagewish_icon"}/>위시리스트 보기
                    </span>}
                    className={"mypage_wishlist"}
                />
            </div>
            <div className="mypage_onclick" onClick={()=>{navigate(`/order/${user}`)}}>
                <Button
                    btn={
                    <span className="mypage_btn">
                        <MypageOrder className={"mypageorder_icon"}/>주문내역 보기
                    </span>}
                    className={"mypage_wishlist"}
                />
            </div>
            <Footer/> 
            <Button btn={"로그아웃"} onClick={()=>{logout()}} className="mypage_logout"/>
        </div>
    </>
    )
}

export default MyPage