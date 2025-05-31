import { useEffect, useState } from "react";
import { instance } from "../../api/sanrio";
import useWish from "../../api/wish";
import Wish from "../public/Wish";

function WishButton({ item }) {
    const { wishList, bufferServerSync, user } = useWish();
    const [ wish, setWish ] = useState(false);

    useEffect(() => {
        async function userWish(){
            await instance.get('wish.php',{
                params: { case: 'GET', user: user }
            })
            .then((res)=>{
                if(user){
                    const somewish = res?.data?.some(liked => liked.wish_id === item.id);
                    
                    localStorage.setItem('wish', JSON.stringify(res.data));
                    setWish(somewish);
                }
            })
        }
        userWish()
    }, [user, item.id]);

    const toggleWish = (item) => {
        let updated;
        if (wish) {
            updated = wishList.filter(x => x.id === item.id || x.wish_id === item.id);
            bufferServerSync(item, 'remove');
            
        } else {
            updated = [...wishList, item];
            bufferServerSync(item, 'add');
        }

        localStorage.setItem('wish', JSON.stringify(updated));
        setWish(!wish);
    };

    return (
        <div className='card_wish' onClick={(e)=>{e.stopPropagation();}}>
            <Wish wish={wish} onToggle={()=>{toggleWish(item)}}/>
        </div>
    )
}

export default WishButton