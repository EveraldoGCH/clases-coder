import React from 'react'
import Header from '../Header/Header'
import "./style.css"

export default function HeaderConChildren({children}) {
  return (
    <>
    <Header/>
    {children}
    <div className='footer'>FOOTER</div>
    </>
  )
}
