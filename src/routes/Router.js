import { Routes, Route } from 'react-router-dom';
import MainPage from "../pages/MainPage";

function AppRouter() {
    return (
        <div>
            <Routes>
                <Route path="/main" element={<MainPage />} />
            </Routes>
        </div>
    )
}

export default AppRouter;