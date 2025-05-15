import { useState } from 'react';
import { Link } from 'react-router-dom';
import TagBtn from '../public/TagBtn'
import CardItem from './CardItem'

function ListItem({ item }) {
    const [ moreView , setmoreView ] = useState(20);

    const more = () => {
        setmoreView(prev => prev + 20);
    };

  return (
    <>
    <div className='list_container'>
      <div className={'item_container'}>
        { item?.slice(0, moreView).map((item)=>
          <Link to={`/ProductPage/${item.id}`} key={item.id}>
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