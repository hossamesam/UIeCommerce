import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Shop from '../pages/Shop/Shop'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import Product from '../pages/Product/Product'


export default function AppRoutes() {
    return (
        <Routes>
            <Route index path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/shop/" element={<Shop />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/shop/Product" element={<Product />} />
        </Routes>
    )
}