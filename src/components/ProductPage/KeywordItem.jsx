import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from 'swiper/modules';
import { instance } from "../../api/sanrio";
import KeywordCard from "./KeywordCard";
import "swiper/css";
import DashedLine from "../public/DashedLine";
import { Link } from "react-router-dom";


function KeywordItem({ item }) {
    const [ keyword, setKeyword ] = useState([]); 

    useEffect(() => {
        if (!item?.p_name) return;

        const keyword = item.p_name.split(" ")[1];
        const productKeyword = async () => {
            try {
            const res = await instance.get('product_filter.php',{
                params: { keyword: keyword, id: item.id }

            });
            
            setKeyword(res.data);
            } catch (err) {
            console.error("관련 상품 불러오기 실패", err);
            }
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
                    <Link to={`/product/${item.id}`}>
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