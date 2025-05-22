import { NavLink, useLocation } from 'react-router-dom';
import KittyNote1 from "../icon/KittyNote1";
import KittyNote2 from "../icon/KittyNote2";
import MymelNote1 from "../icon/MymelNote1";
import MymelNote2 from "../icon/MymelNote2";
import PomNote1 from "../icon/PomNote1";
import PomNote2 from "../icon/PomNote2";
import CinnaNote1 from "../icon/CinnaNote1";
import CinnaNote2 from "../icon/CinnaNote2";
import { useCategory } from '../../api/sanrio';

function NaviBar({ main, mid, sub }) {
    const { category } = useCategory();

    function note8Icons(){
        switch(main){
            case "헬로키티":
                return <KittyNote1/>
            case "마이멜로디":
                return <MymelNote1/>
            case "폼폼푸린":
                return <PomNote1/>
            case "시나모롤":
                return <CinnaNote1/>
            default: break;
        }
    }

    function note16Icons(){
        switch(main){
            case "헬로키티":
                return <KittyNote2/>
            case "마이멜로디":
                return <MymelNote2/>
            case "폼폼푸린":
                return <PomNote2/>
            case "시나모롤":
                return <CinnaNote2/>
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
                <div className="main catgory">
                    <NavLink to={`/list/category/${category[0]}`}>{main}</NavLink>
                </div>
                { note8Icons() }

                <div className="mid catgory">
                    <NavLink to={`/list/category/${category[0]}/${category[1]}`}>{mid}</NavLink>
                </div>
                { note16Icons() }

                <div className="sub catgory">
                    <NavLink to={`/list/category/${category[0]}/${category[1]}/${category[2]}`}>{sub}</NavLink>
                </div>
            </div>
            <div className='catgory_banner'>{ banner() }</div>
        </div>
    )
}

export default NaviBar