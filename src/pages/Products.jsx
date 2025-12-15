import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Products(){
  const [products,setProducts] = useState([])
  useEffect(()=>{ axios.get('https://fakestoreapi.com/products').then(r=>setProducts(r.data)) },[])
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Products</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(p=>(
          <li key={p.id} className="p-4 border rounded bg-white">
            <Link to={`/products/${p.id}`} className="font-medium">{p.title}</Link>
            <div className="text-sm text-gray-600">${p.price}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
