import './App.css'
import NavSec from './components/nav';
import Footer from './components/footer';

import Home from './pages/Home';
import QuickPay from './pages/QuickPay';
import About from './pages/About';
import payment_sec from './sections/QP/Payment-sec';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {


  return (
    <>
    <BrowserRouter>
    <NavSec/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/quick-pay' element={<QuickPay/>}/>
      <Route path='/payment' element={<payment_sec/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
