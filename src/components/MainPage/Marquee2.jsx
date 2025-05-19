import '../../styles/main.scss';

function Marquee2() {
    return (
        <div className="marquee_wrapper">
            <div className="marquee_band pompom">
                <div className="marquee_tag left">
                    <span>
                        POMPOMPURIN <img src="../img/main_pompom_01.png" />
                        POMPOMPURIN <img src="../img/main_pompom_01.png" />
                        POMPOMPURIN <img src="../img/main_pompom_01.png" />
                        POMPOMPURIN <img src="../img/main_pompom_01.png" />
                    </span>
                </div>
            </div>

            <div className="marquee_band kitty">
                <div className="marquee_tag right">
                    <span>
                        <img src="../img/main_kitty_01.png" /> HELLO KITTY
                        <img src="../img/main_kitty_01.png" /> HELLO KITTY
                        <img src="../img/main_kitty_01.png" /> HELLO KITTY
                        <img src="../img/main_kitty_01.png" /> HELLO KITTY
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Marquee2;
