import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
      <div className='header'>
        <NavBar/>
        <ItemListContainer message={"Sitio en mantenimiento"}/>
      </div>
  )
}

export default App
