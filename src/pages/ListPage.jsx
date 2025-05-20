import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { sanrioStore, useCategory, midName, subName } from '../api/sanrio';
import NaviBar from '../components/ListPage/NaviBar';
import ListItem from '../components/ListPage/ListItem';
import SanrioNote1 from '../components/icon/SanrioNote1';
import SanrioNote2 from '../components/icon/SanrioNote2';

import "../styles/list.scss";

function ListPage() {
   const { loadAll, sanrio, all, categoryData, Character, midData, subData, categorypath, mid1, sub1 } = sanrioStore();
   const { category } = useCategory();
   const [ main, setMain ] = useState();
   const [ allCat, setAll ] = useState();
   const [ mainCat, setMainCat ] = useState();
   const [ mid, setMid ] = useState(); 
   const [ midCat, setMidCat ] = useState();
   const [ sub, setSub ] = useState();
   const [ subCat, setSubCat ] = useState();
   
   const location = useLocation();
   const mainParam = location.pathname.split("/").filter(Boolean)[2];
   const midParam = location.pathname.split("/").filter(Boolean)[3];
   const subParam = location.pathname.split("/").filter(Boolean)[4];

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [location])
   useEffect(() => {
      const load = async () => {
         await loadAll();
         await categoryData();  // 이거 먼저 실행해서 category 값 세팅
         categorypath(mainParam);          // 그리고 이때 category 콘솔 찍히게
      };
      load();
   }, []);

   useEffect(()=>{
         setMain(mainParam);
         setMid(mid1);
         setSub(sub1);
   },[])

const korName = midName[midParam];

   useEffect(() => {
      const localCategory = async () => {
         if(category[0] === "all"){
            all();
         }else{
            Character(mainParam);
         }
         
         if (midParam && subParam) {
            subData(mainParam, subParam);
         } else if (midParam) {
            midData(mainParam, midParam);
         }
      }
      localCategory();
   }, [category, midParam, subParam]);


   useEffect(() => {
      if( main?.length && mid?.length && sub?.length ){
         category.filter(item => {
            console.log(item)
               // switch (item) {
               //     //대 카테고리
               //    case "all":
               //       setMainCat("산리오 친구들"); break;
               //    case "kitty":
               //       setMainCat(main[3]?.cat_name); break;
               //    case "mymel":
               //       setMainCat(main[2]?.cat_name); break;
               //    case "pompom":
               //       setMainCat(main[1]?.cat_name); break;
               //    case "cinna":
               //       setMainCat(main[0]?.cat_name); break;
   
               //     //중 카테고리
               //    case "kitchen":
               //       setMidCat(mid[11]?.cat_name); break;
               //    case "homedeco":
               //       setMidCat(mid[7]?.cat_name); break;
               //    case "pashion":
               //       setMidCat(mid[3]?.cat_name); break;
                  
               //     //소 카테고리
               //    case "lunchbox":
               //       setSubCat(sub[23]?.cat_name); break;
               //    case "tumblr":
               //       setSubCat(sub[19]?.cat_name); break;
               //    case "cushion":
               //       setSubCat(sub[15]?.cat_name); break;
               //    case "blanket":
               //       setSubCat(sub[11]?.cat_name); break;
               //    case "wallet":
               //       setSubCat(sub[7]?.cat_name); break;
               //    case "keyring":
               //       setSubCat(sub[3]?.cat_name); break;
               //    default: break;
               // }
         })
      }
   }, [category, main, mid, sub]);
   
   if(!sanrio.length) return;
   return (
      <>
      { category[0] === "all" ? (
         <div className='list_all'>
            <div className='list_sanrio'>
               <SanrioNote1/>
               <p>산리오 친구들</p>
               <SanrioNote2/>
            </div>
            <p className='sanrio_img'><img src="/img/list_sanriobanner_01.svg" alt="" /></p>
         </div>
      ) : (
         <NaviBar main={mainCat} mid={midCat} sub={subCat}/>
      ) }
      <ListItem item={sanrio}/>
      </>
   )
}

export default ListPage