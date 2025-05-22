import { useState } from 'react';
import axios from 'axios';

let buffer = [];

export default function useWish() {

    // 로컬스토리에 저장된 wishlist 가져오기
    const [ wishList, setWishList ] = useState(() => {
        return JSON.parse(localStorage.getItem('wish')) || [];
    });

    // 세션스토리에 저장된 user값 가져오기
    const user = sessionStorage.getItem('user');
    
    // 서버에 전송할 buffer => action
    const bufferServerSync = (item, action) => {
        buffer.push({ item, action, user });

        clearTimeout(window._wishTimer);
        window._wishTimer = setTimeout(() => {
            sendToServer();
        }, 500);
    };

    // 실제 서버로 전송하는 함수
    const sendToServer = () => {
        if (buffer.length === 0) return;
        axios.post(`${process.env.REACT_APP_APIURL}/admin/api/wish.php`, buffer)
            .then(() => {
                buffer = [];
                localStorage.removeItem('wish');
            });
    };

    return {
        wishList,
        bufferServerSync,
        user
    };
}