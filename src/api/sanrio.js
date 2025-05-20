import { create } from 'zustand';
import axios from 'axios';

//Mysql 데이터
export const instance = axios.create({
    baseURL : "http://localhost/admin/api/",
});

const sanrioName = {
    kitty: "헬로키티",
    mymel: "마이멜로디",
    pompom: "폼폼푸린",
    cinna: "시나모롤",
};

export const midName = {
    kitchen: '주방용품',
    homedeco: '홈데코',
    pashion: '패션',
};

export const subName = {
    lunchbox: '도시락',
    tumblr: '텀블러',
    cushion: '쿠션',
    blanket: '이불',
    wallet: '지갑',
    keyring: '키링',
};

export const sanrioStore = create((set, get) => ({
    data: [],
    sanrio: [],
    category: [],
    mid1: [],
    sub1: [],

    // 전체
    loadAll: async () => {
        const res = await instance.get("/p_list.php");
        const data = res.data;
        
        set({ data: data, sanrio: data });
    },

    categoryData: async () => {
        const res = await instance.get("/p_category.php");
        const data = res.data;
        
        set({ category: data });
    },

    categorypath: ( mainParam ) => {
        const { category } = get();
        const sanrio = sanrioName[mainParam];
        const Character = category.filter(item => item.cat_name == sanrio)
        const mid1 = category.filter(item => Character.some(cat => cat.id == item.cat_parent));
        const sub1 = category.filter(item => mid1.some(cat => cat.id == item.cat_parent));

        set({ mid1, sub1 });
    },

    all :async()=>{
        const { data } = get();

        set({ sanrio: data });
    },

    // 캐릭터 (대 카테고리)
    Character: (mainParam) => {
        const { data, category } = get();

        const sanrio = sanrioName[mainParam];
        const Character = category.filter(item => item.cat_name == sanrio)
        const mid = category.filter(item => Character.some(cat => cat.id == item.cat_parent));
        const sub = category.filter(item => mid.some(cat => cat.id == item.cat_parent));
        const filter = data.filter(item => sub.some(cat => cat.id == item.cat_id));

        set({ sanrio: filter });
    },

    //중 카테고리
    midData: ( mainParam, midParam ) => {
        const { data, category } = get();

        const sanrio = sanrioName[mainParam];
        const korName = midName[midParam];
        const Character = category.filter(item => item.cat_name == sanrio)
        const mid = category.filter(item => Character.some(cat => cat.id == item.cat_parent));
        const kormid = mid.filter(item => item.cat_name == korName);
        const sub = category.filter(item => kormid.some(cat => cat.id == item.cat_parent));
        const filter = data.filter(item => sub.some(cat => cat.id == item.cat_id));

        set({ sanrio: filter });
    },

    // 소 카테고리
    subData: ( mainParam, subParam ) => {
        const { data, category } = get();

        const sanrio = sanrioName[mainParam];
        const korName = subName[subParam];
        const Character = category.filter(item => item.cat_name == sanrio)
        const mid = category.filter(item => Character.some(cat => cat.id == item.cat_parent));
        const sub = category.filter(item => mid.some(cat => cat.id == item.cat_parent));
        const korsub = sub.filter(item => item.cat_name == korName);
        const filter = data.filter(item => korsub.some(cat => cat.id == item.cat_id));

        set({ sanrio: filter });
    },

    // 상세
    idData :async(itemId)=>{
        const res = await instance.get("/p_list.php");
        const data = res.data;
        const id = data.find(item => item.id === itemId)

        set({ sanrio: id });
    },

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
