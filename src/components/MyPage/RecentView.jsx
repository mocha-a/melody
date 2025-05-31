import { useEffect, useState } from "react";
import { useRecentViewed } from "../../useRecentViewed";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";
import KeywordCard from "../ProductPage/KeywordCard";

function RecentView() {
  const { getProducts } = useRecentViewed();
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  return (
    <>
        <div className="recent_container">
            <h3>최근 본 상품</h3>
            <Swiper
            slidesPerView={3}
            spaceBetween={8}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            >
            {products.map(item=>
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

export default RecentView