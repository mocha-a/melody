import axios from 'axios';
import { useEffect, useState } from 'react';
import { sanrioStore, useCategory } from '../api/sanrio';
import NaviBar from '../components/ListPage/NaviBar';
import ListItem from '../components/ListPage/ListItem';

import "../styles/list.scss";
import { useLocation } from 'react-router-dom';

function ListPage() {
   const { sanrio, all, kitty, mymel, cinna, pompom } = sanrioStore();
   const { category } = useCategory();
   const [ main, setMain ] = useState();
   const [ mainCat, setMainCat ] = useState();
   const [ mid, setMid ] = useState(); 
   const [ midCat, setMidCat ] = useState();
   const [ sub, setSub ] = useState();
   const [ subCat, setSubCat ] = useState();

   const location = useLocation();
   const mainParam = location.pathname.split("/").filter(Boolean)[2];
   const midParam = location.pathname.split("/").filter(Boolean)[3];
   const subParam = location.pathname.split("/").filter(Boolean)[4];
   console.log(midParam);
   
   useEffect(()=>{
      axios("http://anji.dothome.co.kr/admin/api/p_category.php")
      .then((res)=>{
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
                  await kitty(); break;
               case "mymel":
                  await mymel(); break;
               case "pompom":
                  await pompom(); break;
               case "cinna":
                  await cinna(); break;
               default: break;
            }
      }
      categoryData();
   }, [category, main, mid, sub]);

   useEffect(() => {
      if( main?.length && mid?.length && sub?.length ){
         category.map(item => {
               switch (item) {
                   //대 카테고리
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

   if(mainParam){
      
   }
   
   if(!sanrio.length) return;
   return (
      <>
      <NaviBar main={mainCat} mid={midCat} sub={subCat}/>
      <ListItem item={sanrio}/>
      </>
   )
}

export default ListPage