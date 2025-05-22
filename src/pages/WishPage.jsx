import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CardItem from "../components/ListPage/CardItem"
import NoWish from "../components/MyPage/NoWish"
import MenuTitle from "../components/public/MenuTitle"
import Footer from "../components/public/Footer";

function WishPage() {
    const [ data, setData ] = useState([]);
    const user = sessionStorage.getItem("user");
    
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_APIURL}/api/wish.php`, {
            params: { case: 'GET', type: 'all' }
        })
        .then(res=>{
            const userId = res.data.filter(liked => liked.m_id === user);
            setData(userId)
        })
    },[data])

    return (
        <>
        <MenuTitle title={"위시리스트"}/>
        {data.length === 0 ?
            <NoWish/>
        :(
        <div className='wish_container'>
            { data?.map( item =>
            <Link to={`/product/${item.wish_id}`} key={item.id}>
                <CardItem item={item} name={"wish"}/>
            </Link>
            )}
        </div>
        )}
        </>
    )
}

export default WishPage