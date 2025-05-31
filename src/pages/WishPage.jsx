import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { instance } from "../api/sanrio";
import useWish from "../api/wish";
import CardItem from "../components/ListPage/CardItem"
import NoWish from "../components/MyPage/NoWish"
import MenuTitle from "../components/public/MenuTitle"

function WishPage() {
    const [ data, setData ] = useState([]);
    const { user } = useWish();

    useEffect(()=>{
        instance.get('wish.php',{
            params: { case: 'GET', type: 'all', user: user }
        })
        .then(res=>{
            setData(res.data)
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