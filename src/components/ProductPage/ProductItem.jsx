import CardItem from "../ListPage/CardItem";
import DashedLine from "../public/DashedLine";

import "../../styles/product.scss";

function ProductItem({ item }) {
    
  return (
    <>
    <div className="product_container">
        <CardItem item={item} name={"product"}/>
        <div className="product_line"><DashedLine/></div>
        <h3>상세보기</h3>
        <div className="detail" dangerouslySetInnerHTML={{ __html: item.p_content }} />
    </div>
    </>
  )
}

export default ProductItem