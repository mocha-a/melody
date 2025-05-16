import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { sanrioStore } from '../api/sanrio';
import MenuTitle from '../components/public/MenuTitle';
import NaviBar from '../components/ListPage/NaviBar';
import ListItem from '../components/ListPage/ListItem';

import "../styles/list.scss";

function ListPage() {
    const { sanrio, kitty } = sanrioStore();

    const location = useLocation();
    const category = location.pathname.split("/").filter(Boolean);

    useEffect(()=>{
        kitty();
    },[])

    return (
        <>
        <MenuTitle title={"타이틀이여라"}/>
        <NaviBar main={"헬로키티"} mid={"패션잡화"} sub={"키링"}/>
        <ListItem item={sanrio}/>
        </>
    )
}

export default ListPage