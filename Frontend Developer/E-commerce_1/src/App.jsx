import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import LoginSignup from './Pages/LoginSignup'
import Product from './Pages/Product'
import Fotter from './Component/Fotter/Fotter'
import men_banner from './Component/Assets/banner_mens.png'
import women_banner from './Component/Assets/banner_women.png'
import kid_banner from './Component/Assets/banner_kids.png'
import Cart from './Pages/Cart'
import Choices from './Component/Choices/Choices'
import Checkout from './Component/Checkout/Checkout'
// import Choices from './Pages/Choices'

const App = () => {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path ="/mens" element={<ShopCategory  category="men" banner={men_banner} />} />
        <Route path ="/womens" element={<ShopCategory category="women" banner={women_banner} />} />
        <Route path ="/kids" element={<ShopCategory category="kid" banner={kid_banner} />} />
        <Route path ="/Choice" element={<Choices/>} />
        <Route path="Login" element={<LoginSignup/>}/>
        <Route path ="Product" element={<Product/>}>
         <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>} />
        
      
      </Routes>
      <Fotter/>
     </Router>
    </div>
  )
}

export default App

