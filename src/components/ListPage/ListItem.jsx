import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecentViewed } from '../../useRecentViewed';
import TagBtn from '../public/TagBtn'
import CardItem from './CardItem'

function ListItem({ item, mainParam }) {
  const [ moreView , setmoreView ] = useState(20);
  const [ theme , setTheme ] = useState('search');
  const { saveProduct } = useRecentViewed();

  useEffect(()=>{
    setTheme(mainParam)
  },[mainParam])

  const more = () => {
      setmoreView(prev => prev + 20);
  };

  return (
    <>
    <div className='list_length'>
      <span className={`color_${theme}`}>{item.length}</span> <span>개</span>
    </div>
    <div className='list_container'>
      <div className={'item_container'}>
        { item?.slice(0, moreView).map((item)=>
          <Link to={`/product/${item.id}`} key={item.id} onClick={()=>{saveProduct(item)}}>
            <CardItem item={item} moreView={moreView} name={"list"}/>
          </Link>
        )}
      </div>
    </div>

    {moreView < item.length && (
        <div className='more_container'>
            <TagBtn className={"more"} tagbtn={"더보기"} onClick={()=>{more()}}/>
        </div>
    )}
    </>
  )
}

export default ListItem