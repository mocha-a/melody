import { Routes, Route } from 'react-router-dom';
import MainPage from "../pages/MainPage";
import ListPage from '../pages/ListPage';
import ProductPage from '../pages/ProductPage';

function AppRouter() {


    return (
        <div>
            <Routes>
                <Route path='/listPage' element={<ListPage/>}/> 
                <Route path='/listPage/:main' element={<ListPage/>}/>
                <Route path='/listPage/:main/:mid/' element={<ListPage/>}/>
                <Route path='/listPage/:main/:mid/:sub' element={<ListPage/>}/>
                <Route path='/productPage/:id' element={<ProductPage/>}/>
                <Route path="/main" element={<MainPage />} />
            </Routes>
        </div>
    )
}

export default AppRouter;
