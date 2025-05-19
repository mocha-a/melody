import '../styles/main.scss';
import Section1 from '../components/MainPage/Section1';
import Section2 from '../components/MainPage/Section2';
import Marquee1 from '../components/MainPage/Marquee1';
import Marquee2 from '../components/MainPage/Marquee2';
import Footer from '../components/public/Footer';

function MainPage() {
  return (
    <div className="main_container">
      <section>
        <Section1 />
        <Marquee1 />

        <Section2/>
        <Marquee2 />
      </section>

      <Footer/>
    </div>
  );
}

export default MainPage;
