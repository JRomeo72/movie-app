import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import Catalog from '../views/Catalog';
import Detail from '../views/Detail';

const Router = () => {
    return (
        <Routes>
            <Route path='/:category/search/:keyword' element={<Catalog />} />
            <Route path='/:category/:id' element={<Detail />} />
            <Route path='/:category' element={<Catalog />} />
            <Route path='/' element={<Home />} />
        </Routes>
    )
}

export default Router