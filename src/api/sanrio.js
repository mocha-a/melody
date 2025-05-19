import { create } from 'zustand';
import axios from 'axios';

//Mysql 데이터
export const instance = axios.create({
    baseURL : "http://localhost/admin/api/",
});

export const sanrioStore = create((set) => ({
    sanrio: [],

    // 전체
    all :async()=>{
        const res = await instance.get("/p_list.php");
        const data = res.data;

        set({ sanrio: data });
    },
    // 헬로키티
    kitty :async()=>{
        const res = await instance.get("/p_list.php");
        const data = res.data;
        const kitty = data.filter(item => item.p_name.includes("헬로키티"));

        set({ sanrio: kitty });
    },

    // 마이멜로디
    mymel :async()=>{
        const res = await instance.get("/p_list.php");
        const data = res.data;
        const mymel = data.filter(item => item.p_name.includes("마이멜로디"));

        set({ sanrio: mymel });
    },

    // 시나모롤
    cinna :async()=>{
        const res = await instance.get("/p_list.php");
        const data = res.data;
        const cinna = data.filter(item => item.p_name.includes("시나모롤"));

        set({ sanrio: cinna });
    },

    // 폼폼푸린
    pompom :async()=>{
        const res = await instance.get("/p_list.php");
        const data = res.data;
        const pom = data.filter(item => item.p_name.includes("폼폼푸린"));

        set({ sanrio: pom });
    },
    
    // 상세
    idData :async(itemId)=>{
        const res = await instance.get("/p_list.php");
        const data = res.data;
        const id = data.find(item => item.id === itemId)

        set({ sanrio: id });
    },

    // 중 카테고리
    kittyMid :async(midParam)=>{
        const res = await instance.get("/p_list.php");
        const data = res.data;
        const kitty = data.filter(item => item.p_name.includes("헬로키티"));

        let filter;
        switch(midParam) {
            case 'kitchen':
            filter = kitty.filter(item => ['9', '13'].includes(item.cat_id)); break;
            case 'homedeco':
            filter = kitty.filter(item => ['21', '25'].includes(item.cat_id)); break;
            case 'pashion':
            filter = kitty.filter(item => ['33', '37'].includes(item.cat_id)); break;
            default:
            filter = kitty;
        }
        set({ sanrio: filter });
    },

    mymelMid :async(midParam)=>{
        const res = await instance.get("/p_list.php");
        const data = res.data;
        const mymel = data.filter(item => item.p_name.includes("마이멜로디"));

        let filter;
        switch(midParam) {
            case 'kitchen':
            filter = mymel.filter(item => ['10', '14'].includes(item.cat_id)); break;
            case 'homedeco':
            filter = mymel.filter(item => ['22', '26'].includes(item.cat_id)); break;
            case 'pashion':
            filter = mymel.filter(item => ['34', '38'].includes(item.cat_id)); break;
            default:
            filter = mymel;
        }
        set({ sanrio: filter });
    },

    cinnaMid :async(midParam)=>{
        const res = await instance.get("/p_list.php");
        const data = res.data;
        const cinna = data.filter(item => item.p_name.includes("시나모롤"));

        let filter;
        switch(midParam) {
            case 'kitchen':
            filter = cinna.filter(item => ['12', '16'].includes(item.cat_id)); break;
            case 'homedeco':
            filter = cinna.filter(item => ['24', '28'].includes(item.cat_id)); break;
            case 'pashion':
            filter = cinna.filter(item => ['36', '40'].includes(item.cat_id)); break;
            default:
            filter = cinna;
        }
        set({ sanrio: filter });
    },

    pompomMid :async(midParam)=>{
        const res = await instance.get("/p_list.php");
        const data = res.data;
        const pompom = data.filter(item => item.p_name.includes("폼폼푸린"));

        let filter;
        switch(midParam) {
            case 'kitchen':
            filter = pompom.filter(item => ['11', '15'].includes(item.cat_id)); break;
            case 'homedeco':
            filter = pompom.filter(item => ['23', '27'].includes(item.cat_id)); break;
            case 'pashion':
            filter = pompom.filter(item => ['35', '39'].includes(item.cat_id)); break;
            default:
            filter = pompom;
        }
        set({ sanrio: filter });
    },

    // 소 카테고리
}));

export const useCategory = create((set) => ({
    category: JSON.parse(localStorage.getItem('category')),

    setCategory: (newCategory) => {
        if (newCategory === 'all') {
            localStorage.setItem('category', JSON.stringify([newCategory]));
            set({ category: newCategory });
            return;
        }
        
        localStorage.setItem('category', JSON.stringify(newCategory));
        set({ category: newCategory });
    },
}));
