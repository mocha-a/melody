import WishButton from "../ListPage/WishButton"

function KeywordCard({ item }) {
  return (
    <div className='keyWord_item'>
        <div className='keyWord_item_img'>
            <p><img src={`${process.env.REACT_APP_APIURL_IMG}/${item?.p_thumb}`} alt="" /></p>
            <WishButton item={item}/>
        </div>
        <div className='keyWord_content'>
            <b>{item?.p_name}</b>
            <p>{Number(item?.p_price).toLocaleString()}원</p>
        </div>
    </div>
  )
}

export default KeywordCard