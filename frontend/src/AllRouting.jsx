import React from 'react'
import {Route,Routes} from "react-router-dom";
import Products from './components/Products';
import Login from './components/login';
import Signup from './components/Signup';
import AddProduct from './components/AddProduct';
import CartCard from "./components/CartCard";
const AllRouting = () => {
  return (
    <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/addproducts' element={<AddProduct/>}/>
        <Route path='/cart' element={<CartCard/>}/>
    </Routes>
  )
}

export default AllRouting