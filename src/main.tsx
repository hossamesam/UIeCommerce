import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Header from './componant/Header/Header.tsx'
import Footer from './componant/Footer/Footer.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <App />
    <Footer/>
  </StrictMode>,
)
