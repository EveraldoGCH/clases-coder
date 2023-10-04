import ItemCount from './components/clase-5/ItemCount';
import { HOC } from './components/clase-8/HOC';
import { Routes, Route } from "react-router-dom"
import HeaderConChildren from './components/clase-5/HeaderConChildren/HeaderConChildren';
import ListaCards from './components/clase-repaso1/ListaCards/ListaCards';
import Personaje from './components/clase-9/Personaje';
import Eventos from './components/clase-10/Eventos/Eventos';

function App() {

  const productos = [{
    titulo: "iPhone 15",
    stock: 10
  }]

  const ItemCountHOC = HOC(ItemCount, productos, "Contador 1")
  const ItemCountHOC2 = HOC(ItemCount, productos, "Contador 27218271287")


  return (
      <HeaderConChildren>
        <Routes>
          <Route path='/' element={<ItemCountHOC/>} exact/>
          <Route path='/eventos' element={<Eventos/>}/>
          <Route path='/contador/:pepito' element={<ItemCountHOC2/>}/>
          <Route path='/listado' element={<ListaCards/>}/>
          <Route path='/personaje/:nombre' element={<Personaje/>}/>
        </Routes>
      </HeaderConChildren>
  );
}

export default App;
