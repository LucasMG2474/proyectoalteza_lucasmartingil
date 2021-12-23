import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import './components/NavBar/NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="ALTEZZA NATURAL PROXIMAMENTE PODRÁ DISFRUTAR DE NUESTROS PRODUCTOS" />
    </>
  )
}

export default App;