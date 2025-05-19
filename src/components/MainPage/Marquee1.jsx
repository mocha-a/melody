import '../../styles/main.scss';


function Marquee1() {
return (
        <div className="marquee_wrapper">
            <div className="marquee_band mymel">
                <div className="marquee_tag left">
                <span>
                    MY MELODY <img src="../img/main_mymelody_01.png"/>
                    MY MELODY <img src="../img/main_mymelody_01.png"/>
                    MY MELODY <img src="../img/main_mymelody_01.png"/>
                    MY MELODY <img src="../img/main_mymelody_01.png"/>
                </span>
                </div>
            </div>

            <div className="marquee_band cinna">
                <div className="marquee_tag right">
                <span>
                    <img src="../img/main_cinna_01.png"/> CINNAMOROLL
                    <img src="../img/main_cinna_01.png"/> CINNAMOROLL
                    <img src="../img/main_cinna_01.png"/> CINNAMOROLL
                    <img src="../img/main_cinna_01.png"/> CINNAMOROLL
                </span>
                </div>
            </div>
        </div>
    );
}

export default Marquee1;
