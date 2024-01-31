import './App.css';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Error404 from './components/error404/Error404';

function App() {
  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path={"/"} element={<ItemListContainer/>}/>
          <Route path={"/category/:category"} element={<ItemListContainer/>}/>
          <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
          <Route path={"*"} element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
