
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { sanrioStore, useCategory } from '../api/sanrio';
import NaviBar from '../components/ListPage/NaviBar';
import ListItem from '../components/ListPage/ListItem';
import SanrioNote1 from '../components/icon/SanrioNote1';
import SanrioNote2 from '../components/icon/SanrioNote2';
import TopButton from '../components/public/TopButton';
import CircularColor from '../components/Join/Loading';

import "../styles/list.scss";

function ListPage() {
   const { loadAll, sanrio, categoryData, Character, midData, subData, categorypath, mid1, sub1 } = sanrioStore();
   const { KRcategory } = useCategory();
   const [ show, setShow ] = useState(true);
   const [ mid, setMid ] = useState(); 
   const [ sub, setSub ] = useState();
   
   const isFirstLoad = useRef(true); 
   const location = useLocation();
   const mainParam = location.pathname.split("/").filter(Boolean)[2];
   const midParam = location.pathname.split("/").filter(Boolean)[3];
   const subParam = location.pathname.split("/").filter(Boolean)[4];
   
   useEffect(() => {
      window.scrollTo(0, 0);
   }, [location])

   useEffect(() => {
      const timer = setTimeout(() => {
         setShow(false); // 0.2초 뒤에 숨기기
      }, 200);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 클린업
   }, []);
   
   useEffect(() => {
      const load = async () => {
         // 무조건 처음 한 번만 전체 데이터와 카테고리 가져옴
         if (isFirstLoad.current) {
            await loadAll();
            await categoryData();
            isFirstLoad.current = false;
         }

         if (KRcategory[0] === "all") {
            await loadAll();
         } else if (mainParam && midParam && subParam) {
            subData(mainParam, subParam);
         } else if (mainParam && midParam) {
            midData(mainParam, midParam);
         } else if (mainParam) {
            Character(mainParam);
         }

         categorypath(mainParam);
   };

   load();
   }, [mainParam, midParam, subParam]);

   
   // 상단 카테고리 텍스트
   useEffect(() => {
      if (!KRcategory.length || !mid1.length || !sub1.length) return;

      const midName = mid1.map(cat => cat.cat_name);
      const minCate = KRcategory.filter(item => midName.includes(item));
      const midText = minCate.join(', ');
      setMid(midText);

      const subName = sub1.map(cat => cat.cat_name);
      const subCate = KRcategory.filter(item => subName.includes(item));
      const subText = subCate.join(', ');
      setSub(subText);

   }, [KRcategory, mid1, sub1]);
   
   if(!sanrio.length) return;
   return (
      <>
      {show ? (
      <div className='list_loading'><CircularColor/></div>
      ) : (
      <>
         {KRcategory[0] === "all" ? (
            <div className='list_all'>
            <div className='list_sanrio'>
               <SanrioNote1 />
               <p>산리오 친구들</p>
               <SanrioNote2 />
            </div>
            <p className='sanrio_img'><img src="/img/list_sanriobanner_01.svg" alt="" /></p>
            </div>
         ) : (
            
            <NaviBar main={KRcategory[0]} mid={mid} sub={sub} />
         )}
         <ListItem item={sanrio} mainParam={mainParam}/>
         <div><TopButton/></div>
      </>
      )}
      </>
   )
}

export default ListPage