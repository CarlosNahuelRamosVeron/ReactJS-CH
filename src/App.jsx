import './App.css';
import CartContextProvider from './components/context/CartContext';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Cart from './components/cart/Cart';
import Error404 from './components/error404/Error404';
import Checkout from './components/checkout/Checkout';

function App() {
  return (
    <CartContextProvider> 
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path={"/"} element={<ItemListContainer/>}/>
          <Route path={"/category/:category"} element={<ItemListContainer/>}/>
          <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
          <Route path={"/cart"} element={<Cart/>}/>
          <Route path={"/checkout"} element={<Checkout/>}/>
          <Route path={"*"} element={<Error404/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
