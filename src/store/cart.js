import create from 'zustand'

const useCart = create(set => ({
  items: [],
  add: (product) => set(state => ({ items: [...state.items, product] })),
  remove: (index) => set(state => ({ items: state.items.filter((_,i)=>i!==index) })),
  clear: () => set({ items: [] })
}))

export default useCart
