import { useEffect, useState } from 'react';
import '../styles/main.scss';
import Section1 from '../components/MainPage/Section1';
import Section2 from '../components/MainPage/Section2';
import Marquee1 from '../components/MainPage/Marquee1';
import Marquee2 from '../components/MainPage/Marquee2';
import Footer from '../components/public/Footer';

function MainPage() {
  const [logoutModal, setLogoutModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  // 세션에 로그인/로그아웃 모달 상태 저장
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

      <Footer />
    </div>
  );
}

export default MainPage;
