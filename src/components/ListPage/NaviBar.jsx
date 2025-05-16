import { NavLink } from 'react-router-dom';
import KittyNote1 from "../icon/KittyNote1";
import KittyNote2 from "../icon/KittyNote2";
import MymelNote1 from "../icon/MymelNote1";
import MymelNote2 from "../icon/MymelNote2";
import PomNote1 from "../icon/PomNote1";
import PomNote2 from "../icon/PomNote2";
import CinnaNote1 from "../icon/CinnaNote1";
import CinnaNote2 from "../icon/CinnaNote2";

function NaviBar({ main, mid, sub }) {
    function mainName(){
        switch(main){
            case "kitty":
                return "헬로키티"
            case "mymel":
                return "마이멜로디"
            case "pompom":
                return "폼폼푸린"
            case "cinna":
                return "시나모롤"
            default: break;
        }
    }

    function midName(){
        switch(mid){
            case "kitchen":
                return "주방용품"
            case "homedeco":
                return "홈데코"
            case "pashion":
                return "패션잡화"
            default: break;
        }
    }

    function subName(){
        switch(sub){
            case "lunchbox":
                return "도시락"
            case "tumblr":
                return "텀블러"
            case "cushion":
                return "쿠션"
            case "blanket":
                return "이불"
            case "wallet":
                return "지갑"
            case "keyring":
                return "키링"
            default: break;
        }
    }

    function note8Icons(){
        switch(main){
            case "kitty":
                return <KittyNote1/>
            case "mymel":
                return <MymelNote1/>
            case "pompom":
                return <PomNote1/>
            case "cinna":
                return <CinnaNote1/>
            default: break;
        }
    }

    function note16Icons(){
        switch(main){
            case "kitty":
                return <KittyNote2/>
            case "mymel":
                return <MymelNote2/>
            case "pompom":
                return <PomNote2/>
            case "cinna":
                return <CinnaNote2/>
            default: break;
        }
    }

    function banner(){
        switch(main){
            case "kitty":
                return <img src="/img/list_kittybanner_01.svg" alt="" />
            case "mymel":
                return <img src="/img/list_mymelbanner_01.svg" alt="" />
            case "pompom":
                return <img src="/img/list_pompombanner_01.svg" alt="" />
            case "cinna":
                return <img src="/img/list_cinnabanner_01.svg" alt="" />
            default: break;
        }
    }

    return (
        <div className="catgory_container">
            <div className="list_catgory">
                <div className="main catgory"><NavLink to={`/List/category/${main}`}>{mainName()}</NavLink></div>
                { note8Icons() }
                <div className="mid catgory"><NavLink to={`/List/category/${main}/${mid}`}>{midName()}</NavLink></div>
                { note16Icons() }
                <div className="sub catgory"><NavLink to={`/List/category/${main}/${mid}/${sub}`}>{subName()}</NavLink></div>
            </div>
            <div className='catgory_banner'>{ banner() }</div>
        </div>
    )
}

export default NaviBar