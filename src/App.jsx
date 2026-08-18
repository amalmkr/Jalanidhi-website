import './App.css'
import NavSec from './components/nav';
import Footer from './components/footer';

import Home from './pages/Home';
import QuickPay from './pages/QuickPay';
import About from './pages/About';
import Payment from './pages/payment';
import PaymentSucceess from './pages/PaymentSuccess';
import PaymentHistory from './pages/PaymentHistory';
import Complaint from './pages/Complaint';
import Announcemnt from './pages/Announcement';
import Help from './pages/Help';
import WaterTime from './pages/WaterTime';
import NewConnection from './pages/NewConnection';
import CheckConnection from './pages/CheckConnection';
import NewConnectionForm from './sections/NewConnection/NewConnectioForm';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {


  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
    <NavSec/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/quick-pay' element={<QuickPay/>}/>
      <Route path='/payment' element={<Payment/>}/>
      <Route path='/payment-success' element={<PaymentSucceess/>}/>
      <Route path='/payment-history' element={<PaymentHistory/>}/>
      <Route path='/help' element={<Help/>}/>
      <Route path='/complaint' element={<Complaint/>}/>
      <Route path='/announcement' element={<Announcemnt/>}/>
      <Route path='/new-connection' element={<NewConnection/>}/>
      <Route path='/check-connection' element={<CheckConnection/>}/>
      <Route path='/water-time' element={<WaterTime/>}/>
      <Route path='/connection-form' element={<NewConnectionForm/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
