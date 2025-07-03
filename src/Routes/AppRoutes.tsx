import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Shop from '../pages/Shop/Shop'


export default function AppRoutes() {
    return (
        <Routes>
            <Route index path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
        </Routes>
    )
}