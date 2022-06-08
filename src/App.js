import React , { useState , useEffect} from 'react'
import Navbar from './components/Navbar'
import {css} from '@emotion/react'

import './index'
import  PropagateLoader  from 'react-spinners/PropagateLoader'

import Header from './components/Header'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'


export default function App() {
  const[loading , setLoading] = useState(false);
  const override =  css`
  display:block;
  border-color:red;
  margin-top:20%;
  margin-left:50%;
  `;

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  },[])


  return (
    <div className='App'>
      {
        loading ? <PropagateLoader color={"#3d2514"} Loading={loading} css={override} size={40}/> 
        :
        <>
        <Navbar/>
        <Header/>
        <Products/>
        <About/>
        <Contact/>
        </>
      
      }

    </div>

    

  )
}
