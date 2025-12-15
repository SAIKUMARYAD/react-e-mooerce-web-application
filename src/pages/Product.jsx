import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import useCart from '../store/cart'

export default function Product(){
  const { id } = useParams()
  const [item,setItem] = useState(null)
  const add = useCart(s => s.add)
  useEffect(()=>{ axios.get(`https://fakestoreapi.com/products/${id}`).then(r=>setItem(r.data)) },[id])
  if(!item) return <div>Loading…</div>
  return (
    <div className="p-4 bg-white rounded shadow-sm">
      <h3 className="text-lg font-semibold">{item.title}</h3>
      <p className="mt-2 text-gray-700">{item.description}</p>
      <p className="mt-2 font-medium">${item.price}</p>
      <button onClick={()=>add(item)} className="mt-3 px-3 py-1 bg-blue-600 text-white rounded">Add to cart</button>
    </div>
  )
}
