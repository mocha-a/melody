import { useEffect, useState } from 'react';
import '../styles/main.scss';
import Section1 from '../components/MainPage/Section1';
import Section2 from '../components/MainPage/Section2';
import Marquee1 from '../components/MainPage/Marquee1';
import Marquee2 from '../components/MainPage/Marquee2';
import CircularColor from '../components/Join/Loading';
import SolidLine from '../components/public/SolidLine';
import Facebook from '../components/icon/Facebook';
import Insta from '../components/icon/Insta';
import Twitter from '../components/icon/Twitter';

function MainPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [logoutModal, setLogoutModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // 로그인/로그아웃 모달 표시
  useEffect(() => {
    if (sessionStorage.getItem("logout_notice")) {
      setLogoutModal(true);
      setTimeout(() => {
        setLogoutModal(false);
        sessionStorage.removeItem("logout_notice");
      }, 1000);
    }

    if (sessionStorage.getItem("login_success")) {
      setLoginModal(true);
      setTimeout(() => {
        setLoginModal(false);
        sessionStorage.removeItem("login_success");
      }, 1000);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="list_loading">
        <CircularColor />
      </div>
    );
  }

  return (
    <div className="main_container">
      {/* 로그인/로그아웃 모달창 */}
      {logoutModal && (
        <div className="modal">
          <div className="alert_box">로그아웃 되었습니다.</div>
        </div>
      )}
      {loginModal && (
        <div className="modal">
          <div className="alert_box">로그인 되었습니다.</div>
        </div>
      )}

      <section>
        <Section1 />
        <Marquee1 />
        <Section2 />
        <Marquee2 />
      </section>

      <div className="footer_container">
        <div className="footer_content">
          <div className="footer_snsIcon">
            <Facebook />
            <Twitter />
            <Insta />
          </div>

          <div className="footer_text">
            <div className="footer_text_title">
              <p>멜로디</p>
              <SolidLine className="footer_solid" />
            </div>

            <div className="footer_text_title">
              <p>
                대표 : 안지현, 김도연<br />
                서울특별시 강남구 강남대로98길 16<br />
                오전 09시 ~ 오후 18시 (주말, 공휴일 제외)<br />
                melody0123@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
