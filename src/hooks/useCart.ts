import { useContext } from 'react'
import { CartContext } from '../contexts/CartContex'

export function useCart() {
  const context = useContext(CartContext)
  return context
}
