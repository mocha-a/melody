import { useEffect } from 'react';
import { sanrioStore } from '../api';
import MenuTitle from '../components/public/MenuTitle';
import NaviBar from '../components/ListPage/NaviBar';
import ListItem from '../components/ListPage/ListItem';

import "../styles/list.scss";

function ListPage() {
    const { sanrio, kitty } = sanrioStore();

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