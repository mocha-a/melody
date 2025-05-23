import ListItem from '../components/ListPage/ListItem';
import MenuTitle from '../components/public/MenuTitle';
import SearchInput from '../components/SearchPage/SearchInput';
import { sanrioStore } from '../api/sanrio';
import { useEffect, useState } from 'react';
import '../styles/search.scss';

function SearchPage() {
    const { sanrio, loadAll } = sanrioStore();
    const [ searchKeyword, setSearchKeyword ] = useState("");

    useEffect(() => {
        loadAll();
    }, []);

    // 키워드 전달받기
    const searchProduct = (e) => {
        setSearchKeyword(e.target.value);
    };

    // 검색 결과
    const filteredProduct = Array.isArray(sanrio) ? sanrio.filter(item =>
        item.p_name?.toLowerCase().includes(searchKeyword.toLowerCase()))
    : [];
    
    // 데이터 안전성 검사 (데이터 있을때만 렌더링해!!)
    // sanrio가 배열이 아니면 true, 빈 배열일 시도 true
    if (!Array.isArray(sanrio) || sanrio.length === 0) return;
    
    return (
        <div className='search_container'>
            <MenuTitle title="검색" />
            <SearchInput onChange={searchProduct} />

            <ListItem item={filteredProduct} />

            {filteredProduct.length === 0 && (
                <div className="no_result">
                    <img src="../img/search_pompom_01.svg"/>
                    검색한 상품이 {"\n"} 없습니다.
                </div>
            )}
        </div>
    )
}

export default SearchPage