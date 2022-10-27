import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from '../redux/Products/Product'
import Products from '../redux/Products/Products'

function Routing() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Products/>} />
            <Route path="products" element={<Products/>} />
            <Route path="/product/:id" element={<Product />}  />
        </Routes>
    </div>
  )
}

export default Routing