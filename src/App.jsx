import './App.css'
import NavSec from './components/nav';
import Footer from './components/footer';

import Home from './pages/Home';
import QuickPay from './pages/QuickPay';
import About from './pages/About';
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
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
