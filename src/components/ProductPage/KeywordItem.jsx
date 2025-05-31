import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from 'swiper/modules';
import { useRecentViewed } from "../../useRecentViewed";
import { instance } from "../../api/sanrio";
import { Link } from "react-router-dom";
import KeywordCard from "./KeywordCard";
import DashedLine from "../public/DashedLine";

import "swiper/css";

function KeywordItem({ item }) {
    const [ keyword, setKeyword ] = useState([]);
    const { saveProduct } = useRecentViewed();

    useEffect(() => {
        if (!item?.p_name) return;

        const keyword = item.p_name.split(" ")[1];
        const productKeyword = async () => {
            const res = await instance.get('product_filter.php',{
                params: { keyword: keyword, id: item.id }

            });
            
            setKeyword(res.data);
        };

        productKeyword();
    }, [item]);

    if(!keyword.length){return}
    return (
        <>
        <div className="product_line"><DashedLine/></div>
        <div className="keyword_container">
            <h3>이런 것도 좋아하실 거 같아요</h3>
            <Swiper
            slidesPerView={3}
            spaceBetween={8}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            >
            {keyword.map(item=>
                <SwiperSlide key={item.id}>
                    <Link to={`/product/${item.id}`} onClick={()=>{saveProduct(item)}}>
                        <KeywordCard item={item}/>
                    </Link>
                </SwiperSlide>
            )}
            </Swiper>
        </div>
        </>
    )
}

export default KeywordItem