import { create } from 'zustand';
import axios from 'axios';

//Mysql 데이터
export const instance = axios.create({
    baseURL : `${process.env.REACT_APP_APIURL}/api/`,
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
    pashion: '패션잡화',
};

export const midNameKR = {
    '주방용품': "kitchen",
    '홈데코': "homedeco",
    '패션잡화': "pashion",
};

export const subName = {
    lunchbox: '도시락',
    tumblr: '텀블러',
    cushion: '쿠션',
    blanket: '이불',
    wallet: '지갑',
    keyring: '키링',
};

export const subNameKR = {
    '도시락': "lunchbox",
    '텀블러': "tumblr",
    '쿠션': "cushion",
    '이불': "blanket",
    '지갑': "wallet",
    '키링': "keyring",
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

    // 카테고리 
    categoryData: async () => {
        const res = await instance.get("/p_category.php");
        const data = res.data;
        
        set({ category: data });
    },

    // 중, 소 카테고리 이름
    categorypath: ( mainParam ) => {
        const { category } = get();
        const sanrio = sanrioName[mainParam];
        const Character = category.filter(item => item.cat_name == sanrio)
        const mid1 = category.filter(item => Character.some(cat => cat.id == item.cat_parent));
        const sub1 = category.filter(item => mid1.some(cat => cat.id == item.cat_parent));

        set({ mid1, sub1 });
    },

    // 캐릭터 데이터
    Character: ( mainParam ) => {
        const { data, category } = get();

        const sanrio = sanrioName[mainParam];
        const Character = category.filter(item => item.cat_name == sanrio)
        const mid = category.filter(item => Character.some(cat => cat.id == item.cat_parent));
        const sub = category.filter(item => mid.some(cat => cat.id == item.cat_parent));
        const filter = data.filter(item => sub.some(cat => cat.id == item.cat_id));

        set({ sanrio: filter });
    },

    //중 카테고리 데이터
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

    // 소 카테고리 데이터
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

    // 상세 데이터
    idData :async(itemId)=>{
        const res = await instance.get("/p_list.php");
        const data = res.data;
        const id = data.find(item => item.id === itemId)

        set({ sanrio: id });
    },

}));

export const useCategory = create((set) => ({
    category: JSON.parse(localStorage.getItem('category_en')),
    KRcategory: JSON.parse(localStorage.getItem('category_kr')),

    setCategory: (newCategory) => {
        if (newCategory === 'all') {
        localStorage.setItem('category_en', JSON.stringify([newCategory]));
        localStorage.setItem('category_kr', JSON.stringify([newCategory]));
        set({ category: [newCategory], KRcategory: [newCategory] });
        return;
        }

        const kr = {
        kitty: "헬로키티",
        mymel: "마이멜로디",
        pompom: "폼폼푸린",
        cinna: "시나모롤",
        kitchen: '주방용품',
        homedeco: '홈데코',
        pashion: '패션잡화',
        lunchbox: '도시락',
        tumblr: '텀블러',
        cushion: '쿠션',
        blanket: '이불',
        wallet: '지갑',
        keyring: '키링',
        };

        const KRcategory = newCategory.map(item => kr[item] || item);

        localStorage.setItem('category_en', JSON.stringify(newCategory));
        localStorage.setItem('category_kr', JSON.stringify(KRcategory));
        set({ category: newCategory, KRcategory });
    },
}));


