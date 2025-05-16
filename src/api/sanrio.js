import { create } from 'zustand';
import axios from 'axios';

//Mysql 데이터
export const instance = axios.create({
    baseURL : "http://anji.dothome.co.kr/admin/api",
});

export const sanrioStore = create((set) => ({
    sanrio: [],

    //헬로키티
    kitty :async()=>{
        const res = await instance.get("/p_list.php");
        const data = res.data;
        const kitty = data.filter(item => item.p_name.includes("헬로키티"));

        set({ sanrio: kitty });
    },

    //마이멜로디
    mymel :async()=>{
        const res = await instance.get("/p_list.php");
        const data = res.data;
        const mymel = data.filter(item => item.p_name.includes("마이멜로디"));

        set({ sanrio: mymel });
    },

    //시나모롤
    cinna :async()=>{
        const res = await instance.get("/p_list.php");
        const data = res.data;
        const cinna = data.filter(item => item.p_name.includes("시나모롤"));

        set({ sanrio: cinna });
    },

    //폼폼푸린
    pom :async()=>{
        const res = await instance.get("/p_list.php");
        const data = res.data;
        const pom = data.filter(item => item.p_name.includes("폼폼푸린"));

        set({ sanrio: pom });
    },
    
    //상세
    idData :async(itemId)=>{
        const res = await instance.get("/p_list.php");
        const data = res.data;
        const id = data.find(item => item.id === itemId)

        set({ sanrio: id });
    }
}));

export const categoryStore = create((set) => ({
    main: [],
    mid: [],
    sub: [],

    mainCategory: async () => {
      const res = await instance.get("/p_category.php");
      const data = res.data;

      const main = data.filter(item => item.cat_level === "0");

      set({ main: main });
    },

    midCategory: async ()=>{
        const res = await instance.get("/p_category.php");
        const data = res.data;

        const mid = data.filter(item => item.cat_level === "1");

    set({ mid: mid });
    },

    subCategory: async ()=>{
        const res = await instance.get("/p_category.php");
        const data = res.data;

        const sub = data.filter(item => item.cat_level === "2");

    set({ sub: sub });
    },
}));

