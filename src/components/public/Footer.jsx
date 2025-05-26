import SolidLine from '../public/SolidLine';
import Facebook from '../icon/Facebook';
import Insta from '../icon/Insta';
import Twitter from '../icon/Twitter';

function Footer() {
    return (
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
    )
}

export default Footer