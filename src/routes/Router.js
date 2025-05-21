import { Routes, Route, useLocation } from 'react-router-dom';
import MainPage from "../pages/MainPage";
import CartPage from "../pages/CartPage";
import ListPage from "../pages/ListPage";
import ProductPage from "../pages/ProductPage";
import LoginPage from "../pages/join/LoginPage";
import SignupPage from "../pages/join/SignupPage";
import PaymentPage from '../pages/PaymentPage';
import MyPage from '../pages/MyPage';
import WishPage from '../pages/WishPage';
import OrderPage from '../pages/OrderPage';

function AppRouter() {
    const location = useLocation();

    return (
        <div>
            <Routes>
                <Route path="/" element={<MainPage key={location.key} />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/mypage/:id" element={<MyPage />} />
                <Route path="/wish/:id" element={<WishPage />} />

                <Route path='/list' element={<ListPage/>}/>
                <Route path='/list/category/:main' element={<ListPage/>}/>
                <Route path='/list/category/:main/:mid/' element={<ListPage/>}/>
                <Route path='/list/category/:main/:mid/:sub' element={<ListPage/>}/>
                <Route path='/product/:id' element={<ProductPage/>}/>
                <Route path='/payment' element={<PaymentPage/>}/>
                <Route path="/order/:id" element={<OrderPage />} />
            </Routes>
        </div>
    )
}

export default AppRouter;
