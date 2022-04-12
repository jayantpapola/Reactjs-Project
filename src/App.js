import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Cart from './Components/Cart';
import ProductState from './Context/ProductAPI.js/ProductState';
import SaleProductState from './Context/ProductAPI.js/SaleProductState';

function App() {
  return (
    <ProductState>  
    <SaleProductState>
      <Router>
        <div className='App'>       
          <Header/>
          <Navbar/>
            <div className='home'>
              <Routes>
                <Route path="/" element={<Body/>}/>
              </Routes>
            </div>
            <div className='CheckOutPage'>
              <Routes>
                <Route path="/Cart" element={<Cart/>}/>
              </Routes>
            </div>
          <Footer/>
        </div>
      </Router>
    </SaleProductState>
    </ProductState>         
                
              
                  

    
    
    
  );
}

export default App;
