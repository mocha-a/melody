import { create } from 'zustand';
import axios from 'axios';

//Mysql 데이터
export const instance = axios.create({
    baseURL : "http://localhost/admin/api/",
});

export const sanrioStore = create((set, get) => ({
    data: [],
    sanrio: [],

    // 전체
    loadAll: async () => {
        const res = await instance.get("/p_list.php");
        const data = res.data;
        
        set({ data: data, sanrio: data });
    },

    all :async()=>{
        const { data } = get();

        set({ sanrio: data });
    },

    // 캐릭터 (대 카테고리)
    Character: (mainCat) => {
        const { data } = get();
        const filter = data.filter(item => item.p_name.includes(mainCat));

        set({ sanrio: filter });
    },

    // 상세
    idData :async(itemId)=>{
        const res = await instance.get("/p_list.php");
        const data = res.data;
        const id = data.find(item => item.id === itemId)

        set({ sanrio: id });
    },

    //중 카테고리
    midData: ( mainCat, midParam ) => {
        const { data } = get();
        const base = data.filter(item => item.p_name.includes(mainCat));

        let cat_ids = [];
        switch (midParam) {
            case 'kitchen': cat_ids = ['9', '10', '11', '12', '13', '14', '15', '16']; break;
            case 'homedeco': cat_ids = ['21', '22', '23', '24', '25', '26', '27', '28']; break;
            case 'pashion': cat_ids = ['33', '34', '35', '36', '37', '38', '39', '40']; break;
            default: set({ sanrio: base }); return;
        }

        const filter = base.filter(item => cat_ids.includes(item.cat_id));
        set({ sanrio: filter });
    },

    // 소 카테고리
    subData: ( mainCat, subParam ) => {
        const { data } = get();
        const base = data.filter(item => item.p_name.includes(mainCat));

        let cat_ids = [];
        switch (subParam) {
            case 'lunchbox': cat_ids = ['9', '10', '11', '12']; break;
            case 'tumblr': cat_ids = ['13', '14', '15', '16']; break;
            case 'cushion': cat_ids = ['21', '22', '23', '24']; break;
            case 'blanket': cat_ids = ['25', '26', '27', '28']; break;
            case 'wallet': cat_ids = ['33', '34', '35', '36']; break;
            case 'keyring': cat_ids = ['37', '38', '39', '40']; break;
            default: set({ sanrio: base }); return;
        }

        const filter = base.filter(item => cat_ids.includes(item.cat_id));
        set({ sanrio: filter });
    }
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
