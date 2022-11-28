import { atom } from 'recoil'
import { getRecoil, resetRecoil, setRecoil } from 'recoil-nexus'
import { Cart } from '@/features/cart/types'
import Cookies from 'js-cookie'
import { userState } from '@/features/auth/states/userState'
import { updateCart } from '@/features/cart/api/updateCart'

export const cartState = atom<Cart>({ key: 'cart', default: {} })

export const CartStateModule = {
  set: (cart: Cart) => setRecoil(cartState, cart),
  add: (key: string, amount: number) => {
    setRecoil(cartState, (pre) => {
      const newCart = { ...pre }
      newCart[key] = (newCart[key] || 0) + amount

      if (getRecoil(userState)) {
        updateCart(newCart)
      } else {
        Cookies.set('cart', JSON.stringify(newCart))
      }

      return newCart
    })
  },
  remove: (key: string) => {
    setRecoil(cartState, (pre) => {
      const newCart = { ...pre }
      delete newCart[key]

      if (getRecoil(userState)) {
        updateCart(newCart)
      } else {
        Cookies.set('cart', JSON.stringify(newCart))
      }

      return newCart
    })
  },
  reset: () => resetRecoil(cartState)
}
