import { Routes, Route } from 'react-router-dom';
import MainPage from "../pages/MainPage";
import CartPage from "../pages/CartPage";
import ListPage from "../pages/ListPage";
import ProductPage from "../pages/ProductPage";
import LoginPage from "../pages/join/LoginPage";
import PaymentPage from '../pages/PaymentPage';

function AppRouter() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/login" element={<LoginPage />} />

                <Route path='/list' element={<ListPage/>}/>
                <Route path='/list/category/:main' element={<ListPage/>}/>
                <Route path='/list/category/:main/:mid/' element={<ListPage/>}/>
                <Route path='/list/category/:main/:mid/:sub' element={<ListPage/>}/>
                <Route path='/product/:id' element={<ProductPage/>}/>
                <Route path='/payment' element={<PaymentPage/>}/>
            </Routes>
        </div>
    )
}

export default AppRouter;
