import logo from './logo.svg';
import './App.css';
import Clase4ContenedorPadre from './components/clase-4/clase-4-ContenedorPadre/Clase4ContenedorPadre.js';
import ListaCards from './components/clase-repaso1/ListaCards/ListaCards';
import Props from './components/clase-5/Props/Props';
import Boton from './components/clase-4/clase-4-boton/Boton';
import HeaderConChildren from './components/clase-5/HeaderConChildren/HeaderConChildren';
import ItemCount from './components/clase-5/ItemCount';
import Promises from './components/clase-6/Promises/Promises';
import { useCounter } from './components/clase-8/useCounter';
import { useFetch } from './components/clase-8/useFetch';
import { useEffect } from 'react';
import { HOC } from './components/clase-8/HOC';

function App() {

  const productos=[{
    titulo:"iPhone 15",
    stock:10
}]

// const { personajes }=useFetch("https://rickandmortyapi.com/api/character")


const ItemCountHOC=HOC(ItemCount, productos, "Contador 1")
const ItemCountHOC2=HOC(ItemCount, productos, "Contador 2")


  return (
    <div className="App">
      <ItemCountHOC/>
      <ItemCountHOC2/>
    </div>
  );
}

export default App;
