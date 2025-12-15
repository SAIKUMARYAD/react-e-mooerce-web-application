import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Product from './pages/Product'
import Cart from './pages/Cart'

export default function App(){
  return (
    <>
      <header className="p-4 bg-white shadow-sm">
        <nav className="container mx-auto flex gap-4">
          <Link to="/" className="font-medium">Home</Link>
          <Link to="/products" className="font-medium">Products</Link>
          <Link to="/cart" className="font-medium">Cart</Link>
        </nav>
      </header>
      <main className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/products/:id" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </main>
    </>
  )
}
