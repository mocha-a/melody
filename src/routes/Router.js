import { Routes, Route } from 'react-router-dom';
import MainPage from "../pages/MainPage";
import ListPage from '../pages/ListPage';

function AppRouter() {
    return (
        <div>
            <Routes>
                <Route path='/ListPage' element={<ListPage/>}/> 
                <Route path="/main" element={<MainPage />} />
            </Routes>
        </div>
    )
}

export default AppRouter;
