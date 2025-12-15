import React from 'react'
import useCart from '../store/cart'

export default function Cart(){
  const { items, remove, clear } = useCart(s => ({ items: s.items, remove: s.remove, clear: s.clear }))
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Cart</h2>
      <button onClick={clear} className="mb-3 px-3 py-1 bg-red-500 text-white rounded">Clear</button>
      <ul className="space-y-2">
        {items.map((it, i)=>(
          <li key={i} className="p-3 border rounded bg-white flex justify-between items-center">
            <div>
              <div className="font-medium">{it.title}</div>
              <div className="text-sm text-gray-600">${it.price}</div>
            </div>
            <div>
              <button onClick={()=>remove(i)} className="px-2 py-1 bg-gray-200 rounded">Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
