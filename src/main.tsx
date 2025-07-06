// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './componant/Header/Header.tsx'
import Footer from './componant/Footer/Footer.tsx'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './Routes/AppRoutes.tsx'
import TitleManager from './TitleManager/TitleManager.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/UIeCommerce">
    <TitleManager />
    <Header />
    <AppRoutes />
    <Footer />
  </BrowserRouter>

)