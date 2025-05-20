import { useNavigate } from "react-router-dom";
import MypageWish from "../components/icon/MypageWish";
import ListDividers from "../components/MyPage/MemberBox";
import Button from "../components/public/Button";
import MenuTitle from "../components/public/MenuTitle"

import "../styles/mypage.scss";

function MyPage() {
    const navigate = useNavigate();

    return (
        <div className="mypage_container">
            <MenuTitle title={"마이페이지"}/>
            <div className="mypage_hello">
                <h2>안녕하세요.<br/><b>지도지도</b> 님!</h2>
                <p>회원님의 로그인 정보</p>
            </div>
            <ListDividers/>
            <div onClick={()=>{navigate('/wish/123')}}><MypageWish/><Button btn={"위시리스트 보기"} className={"mypage_wishlist"}></Button></div>
            <div><Button btn={"로그아웃"}/></div>
        </div>
    )
}

export default MyPage