import { Routes, Route, useLocation } from 'react-router-dom';
import MainPage from "../pages/MainPage";
import CartPage from "../pages/cart/CartPage";
import ListPage from "../pages/ListPage";
import ProductPage from "../pages/ProductPage";
import LoginPage from "../pages/join/LoginPage";
import SignupPage from "../pages/join/SignupPage";
import PaymentPage from '../pages/PaymentPage';
import MyPage from '../pages/MyPage';
import WishPage from '../pages/WishPage';
import SearchPage from '../pages/SearchPage';
import OrderPage from '../pages/order/OrderPage';
import OrderDetailPage from '../pages/order/OrderDetailPage';
import CartPaymentPage from '../pages/cart/CartPaymentPage';
import TwoOrderDetail from '../pages/TwoOrderDetail';

function AppRouter() {
    const location = useLocation();

    return (
        <div>
            <Routes>
                <Route path="/" element={<MainPage key={location.key} />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/mypage/:id" element={<MyPage />} />
                <Route path="/wish/:id" element={<WishPage />} />

                <Route path='/list' element={<ListPage/>}/>
                <Route path='/list/category/:main' element={<ListPage/>}/>
                <Route path='/list/category/:main/:mid/' element={<ListPage/>}/>
                <Route path='/list/category/:main/:mid/:sub' element={<ListPage/>}/>
                <Route path='/product/:id' element={<ProductPage/>}/>
                <Route path='/payment' element={<PaymentPage/>}/>
                <Route path='/cartpayment' element={<CartPaymentPage/>}/>
                <Route path="/order/:id" element={<OrderPage />} />
                <Route path="/order/detail/:id" element={<OrderDetailPage />} />
                <Route path="/order/details/:id" element={<TwoOrderDetail />} />
            </Routes>
        </div>
    )
}

export default AppRouter;
