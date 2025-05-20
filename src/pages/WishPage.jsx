import { useEffect } from "react";
import CardItem from "../components/ListPage/CardItem"
import NoWish from "../components/MyPage/NoWish"
import MenuTitle from "../components/public/MenuTitle"
import { sanrioStore } from "../api/sanrio";
import { Link } from "react-router-dom";

function WishPage() {
    const { sanrio, idData } = sanrioStore();

    useEffect(()=>{
        idData("284")
    },[])

    return (
        <>
            <MenuTitle title={"위시리스트"}/>
            <NoWish/>
            <div className={'wish_container'}>
                <Link to={`/product/${sanrio.id}`} key={sanrio.id}>
                    <CardItem item={sanrio} name={"wish"}/>
                </Link>
            </div>
        </>
    )
}

export default WishPage