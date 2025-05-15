import { NavLink } from 'react-router-dom';
import KittyNote_1 from "../icon/KittyNote_1";
import KittyNote_2 from "../icon/KittyNote_2";
import MymelNote_1 from "../icon/MymelNote_1";
import MymelNote_2 from "../icon/MymelNote_2";
import PomNote_1 from "../icon/PomNote_1";
import PomNote_2 from "../icon/PomNote_2";
import CinnaNote_1 from "../icon/CinnaNote_1";
import CinnaNote_2 from "../icon/CinnaNote_2";

function NaviBar({ main, mid, sub }) {
    //도연님이 버거메뉴 만들어주면 파리미터 값으로 카테고리 잡기

    function note8Icons(){
        switch(main){
            case "헬로키티":
                return <KittyNote_1/>
            case "마이멜로디":
                return <MymelNote_1/>
            case "폼폼푸린":
                return <PomNote_1/>
            case "시나모롤":
                return <CinnaNote_1/>
            default: break;
        }
    }

    function note16Icons(){
        switch(main){
            case "헬로키티":
                return <KittyNote_2/>
            case "마이멜로디":
                return <MymelNote_2/>
            case "폼폼푸린":
                return <PomNote_2/>
            case "시나모롤":
                return <CinnaNote_2/>
            default: break;
        }
    }

    function banner(){
        switch(main){
            case "헬로키티":
                return <img src="/img/list_kittybanner_01.svg" alt="" />
            case "마이멜로디":
                return <img src="/img/list_mymelbanner_01.svg" alt="" />
            case "폼폼푸린":
                return <img src="/img/list_pompombanner_01.svg" alt="" />
            case "시나모롤":
                return <img src="/img/list_cinnabanner_01.svg" alt="" />
            default: break;
        }
    }

    return (
        <div className="catgory_container">
            <div className="list_catgory">
                <div className="main catgory"><NavLink to={`/ListPage/${main}`}>{main}</NavLink></div>
                { note8Icons() }
                <div className="mid catgory"><NavLink to={`/ListPage/${main}/${mid}`}>{mid}</NavLink></div>
                { note16Icons() }
                <div className="sub catgory"><NavLink to={`/ListPage/${main}/${mid}/${sub}`}>{sub}</NavLink></div>
            </div>
            <div className='catgory_banner'>{ banner() }</div>
        </div>
    )
}

export default NaviBar