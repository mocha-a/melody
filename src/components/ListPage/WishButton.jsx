import { useEffect, useState } from "react";
import axios from "axios";
import Wish from "../public/Wish";
import useWish from "../../api/wish";

function WishButton({ item }) {
    const { wishList, bufferServerSync, user } = useWish();
    const [ wish, setWish ] = useState(false);
    const wished = wishList.some((x) => x.id === item.id || x.wish_id === item.id);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_APIURL}/admin/api/wish.php`)
        .then((res)=>{
            if(user){
                const userId = res.data.filter(liked => liked.m_id === user);
                const somewish = userId.some(liked => liked.wish_id === item.id);

                localStorage.setItem('wish', JSON.stringify(res.data));
                setWish(somewish);
            }
        })
    }, [user, item.id]);

    const toggleWish = (item) => {
        let updated;
        if (wished) {
            updated = wishList.filter(x => x.id === item.id || x.wish_id === item.id);
            bufferServerSync(item, 'remove');
            
        } else {
            updated = [...wishList, item];
            bufferServerSync(item, 'add');
        }

        localStorage.setItem('wish', JSON.stringify(updated));
        setWish(!wished);
    };

    return (
        <div className='card_wish'>
            <Wish wish={wish} onToggle={()=>{toggleWish(item)}}/>
        </div>
    )
}

export default WishButton