import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import ListPage from '../pages/ListPage'


function AppRouter() {
    return (
        <div>
            <Routes>
                <Route path='/ListPage' element={<ListPage/>}/> 
            </Routes>
        </div>
    )
}

export default AppRouter