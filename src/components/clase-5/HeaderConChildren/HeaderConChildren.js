import React from 'react'
import Header from '../Header/Header'
import "./style.css"
import { NavLink } from 'react-router-dom'

export default function HeaderConChildren({children}) {
  return (
    <>
    <Header/>
    <NavLink to={"/personaje/rick"} activeClassName={"seleccionada"}>Rickss</NavLink>
    <NavLink to={"/personaje/morty"}>Morty</NavLink>
    <NavLink to={"/personaje/summer"}>Summer</NavLink>
    <NavLink to={"/"}>Inicio</NavLink>
    {children}
    </>
  )
}
