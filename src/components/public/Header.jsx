import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCategory } from '../../api/sanrio';
import CartIcon from '../icon/CartIcon';
import MenuIcon from '../icon/MenuIcon';
import MenuCancel from '../icon/MenuCancel';
import GrayNote1 from '../icon/GrayNote1';
import GrayNote2 from '../icon/GrayNote2';
import MyPageIcon from '../icon/MyPageIcon';
import SearchIcon from '../icon/SearchIcon';
import DashedLine from './DashedLine';
import '../../styles/public.scss';

function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const { setCategory } = useCategory();
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);

    const main = () => navigate('/');
    const cart = () => navigate('/cart');
    const login = () => navigate('/login');

    // pathname이 바뀔 때마다 메뉴 닫기
    useEffect(() => {
        setMenuOpen(false);
        setActiveCategory(null);
    }, [location.pathname]);

    // 햄버거 메뉴 소분류 pathname 연결
    function goToCategory(category) {
        if (category === 'all') {
            setCategory([category])
            navigate('/list/category/all');
            return;
        }

        setCategory(category)
        navigate(`/list/category/${category[0]}/${category[1]}/${category[2]}`);
    }

    const subcategories = [
        {
            label: '주방용품',
            category: 'kitchen',
            items: [
            { name: '도시락', sub: 'lunchbox' },
            { name: '텀블러', sub: 'tumblr' },
            ],
        },
        {
            label: '홈데코',
            category: 'homedeco',
            items: [
            { name: '쿠션', sub: 'cushion' },
            { name: '이불', sub: 'blanket' },
            ],
        },
        {
            label: '패션잡화',
            category: 'pashion',
            items: [
            { name: '지갑', sub: 'wallet' },
            { name: '키링', sub: 'keyring' },
            ],
        },
    ];

    // 대분류 카테고리 열고 닫기
    const toggleCategory = (category) => {
        setActiveCategory(prev => (prev === category ? null : category));
    };

    // 햄버거 메뉴 열기
    useEffect(() => {
        document.body.classList.toggle('menu-open', menuOpen);
    }, [menuOpen]);

    return (
        <div className="header_container">
            <div className="header_menu">
                <div className="logo" onClick={main}>
                    <img src="/img/public_logo_01.svg" alt="로고 이미지" />
                </div>

                {/* 아이콘 변경, 메뉴 열기 */}
                <div className="menu_icons">
                    <div className="cart_icon" onClick={cart} >
                        <CartIcon />
                    </div>
                    {menuOpen ? (
                        <div className="menu_icon_wrap" onClick={() => setMenuOpen(false)}>
                            <MenuCancel className="cancel_icon" onClick={() => setMenuOpen(false)} />
                        </div>
                    ) : (
                        <div className="menu_icon_wrap" onClick={() => setMenuOpen(true)}>
                            <MenuIcon className="menu_icon" />
                        </div>

                    )}
                </div>
            </div>

            {menuOpen && (
                <div className="accordion_menu">
                    <div className="category" onClick={() => goToCategory('all')}>
                        <div className="title_row">
                            <h3>전체 상품</h3>
                            <div className="eng_title">
                                <GrayNote1 className="note_icon" />
                                <span>ALL</span>
                            </div>
                        </div>
                    </div>
                    {['kitty', 'mymel', 'pompom', 'cinna'].map((catId) => {
                        const kor = {
                            kitty: '헬로키티',
                            mymel: '마이멜로디',
                            pompom: '폼폼푸린',
                            cinna: '시나모롤',
                        }[catId];
                        const eng = {
                            kitty: 'Hello Kitty',
                            mymel: 'My Melody',
                            pompom: 'Pompompurin',
                            cinna: 'Cinnamoroll',
                        }[catId];
                        return (
                            <div className={`category ${catId} ${activeCategory === catId ? 'active' : ''}`}
                                key={catId} >

                                <div className="title_row" onClick={() => toggleCategory(catId)}>
                                    <h3>{kor}</h3>
                                    <div className="eng_title">
                                        {activeCategory === catId && <GrayNote2 className="note_icon" />}
                                        <span>{eng}</span>
                                    </div>
                                </div>
                                {activeCategory === catId && (
                                    <>
                                        <DashedLine />
                                        <div className="subcategory_block pink">
                                        {subcategories.map(({ label, category, items }) => (
                                            <div className="subcategory_row" key={category}>
                                            <div className="sub_middle">{label}</div>
                                            <div className="sub_items">
                                                {items.map(({ name, sub }) => (
                                                <span
                                                    key={sub}
                                                    onClick={() => goToCategory([catId, category, sub])}
                                                >
                                                    {name}
                                                </span>
                                                ))}
                                            </div>
                                            </div>
                                        ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })}
                    <div className="bottom_menu">
                        <div className="left" onClick={login}>로그인 / 회원가입</div>
                        <div className="right">
                            <div onClick={()=>{navigate('/mypage/123')}}><MyPageIcon /></div>
                            <SearchIcon />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
