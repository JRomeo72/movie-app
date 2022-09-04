import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router'; 
import 'swiper/css';
import './assets/fonts/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  )
}

export default App
