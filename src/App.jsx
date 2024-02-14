import './App.css';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Cart from './components/cart/Cart';
import Error404 from './components/error404/Error404';

function App() {
  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path={"/"} element={<ItemListContainer/>}/>
          <Route path={"/category/:category"} element={<ItemListContainer/>}/>
          <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
          <Route path={"/cart"} element={<Cart/>}/>
          <Route path={"*"} element={<Error404/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  )
}

export default App
