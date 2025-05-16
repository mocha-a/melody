import { Routes, Route } from 'react-router-dom';
import MainPage from "../pages/MainPage";
import ListPage from '../pages/ListPage';
import ProductPage from '../pages/ProductPage';

function AppRouter() {


    return (
        <div>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path='/list' element={<ListPage/>}/> 
                <Route path='/list/category/:main' element={<ListPage/>}/>
                <Route path='/list/category/:main/:mid/' element={<ListPage/>}/>
                <Route path='/list/category/:main/:mid/:sub' element={<ListPage/>}/>
                <Route path='/product/:id' element={<ProductPage/>}/>
            </Routes>
        </div>
    )
}

export default AppRouter;
