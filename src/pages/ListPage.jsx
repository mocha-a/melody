import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { sanrioStore, useCategory } from '../api/sanrio';
import NaviBar from '../components/ListPage/NaviBar';
import ListItem from '../components/ListPage/ListItem';
import SanrioNote1 from '../components/icon/SanrioNote1';
import SanrioNote2 from '../components/icon/SanrioNote2';

import "../styles/list.scss";

function ListPage() {
   const { loadAll, sanrio, all, Character, midData, subData } = sanrioStore();
   const { category } = useCategory();
   const [ main, setMain ] = useState();
   const [ allCat, setAll ] = useState();
   const [ mainCat, setMainCat ] = useState();
   const [ mid, setMid ] = useState(); 
   const [ midCat, setMidCat ] = useState();
   const [ sub, setSub ] = useState();
   const [ subCat, setSubCat ] = useState();
   
   const location = useLocation();
   const midParam = location.pathname.split("/").filter(Boolean)[3];
   const subParam = location.pathname.split("/").filter(Boolean)[4];

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [location])
   
   useEffect(()=>{
      loadAll();
      axios("http://localhost/admin/api/p_category.php")
      .then((res)=>{
         setAll(res.data)
         setMain(res.data.filter(item => item.cat_level === "0"));
         setMid(res.data.filter(item => item.cat_level === "1"));
         setSub(res.data.filter(item => item.cat_level === "2"));
      })
   },[])

   useEffect(() => {
      const categoryData = async () => {
         switch (category[0]) {
            case "all":
               await all(); break;
            case "kitty":
            case "mymel":
            case "pompom":
            case "cinna":
               await Character(mainCat); break;
            default: break;
         }
         
         if (midParam && subParam) {
            subData(mainCat, subParam);
         } else if (midParam) {
            midData(mainCat, midParam);
         }
      }
      categoryData();
   }, [category, midParam, subParam]);

   useEffect(() => {
      if( main?.length && mid?.length && sub?.length ){
         category.map(item => {
               switch (item) {
                   //대 카테고리
                  case "all":
                     setMainCat("산리오 친구들"); break;
                  case "kitty":
                     setMainCat(main[3]?.cat_name); break;
                  case "mymel":
                     setMainCat(main[2]?.cat_name); break;
                  case "pompom":
                     setMainCat(main[1]?.cat_name); break;
                  case "cinna":
                     setMainCat(main[0]?.cat_name); break;
   
                   //중 카테고리
                  case "kitchen":
                     setMidCat(mid[11]?.cat_name); break;
                  case "homedeco":
                     setMidCat(mid[7]?.cat_name); break;
                  case "pashion":
                     setMidCat(mid[3]?.cat_name); break;
                  
                   //소 카테고리
                  case "lunchbox":
                     setSubCat(sub[23]?.cat_name); break;
                  case "tumblr":
                     setSubCat(sub[19]?.cat_name); break;
                  case "cushion":
                     setSubCat(sub[15]?.cat_name); break;
                  case "blanket":
                     setSubCat(sub[11]?.cat_name); break;
                  case "wallet":
                     setSubCat(sub[7]?.cat_name); break;
                  case "keyring":
                     setSubCat(sub[3]?.cat_name); break;
                  default: break;
               }
         })
      }
   }, [category, main, mid, sub]);
   console.log(mainCat);
   
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