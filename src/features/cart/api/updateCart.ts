import { axios } from '@/lib/axios'
import { Cart } from '@/features/cart/types'

export const updateCart = (newCart: Cart) =>
  axios.post('/cart', JSON.stringify(newCart))
