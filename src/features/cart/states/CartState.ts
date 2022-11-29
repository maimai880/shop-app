import { atom, selector } from 'recoil'
import { getRecoil, resetRecoil, setRecoil } from 'recoil-nexus'
import { Cart } from '@/features/cart/types'
import Cookies from 'js-cookie'
import { userState } from '@/features/auth/states/userState'
import { updateCart } from '@/features/cart/api/updateCart'
import { ProductType } from '@/features/products/types'

export const cartState = atom<Cart>({ key: 'cart', default: [] })
export const cartInformationState = selector({
  key: 'cartInformation',
  get: ({ get }) => {
    const cart = get(cartState)

    return {
      quantity: cart.length,
      total: cart
        .map((v) => v.item.price * v.amount)
        .reduce((sum, n) => sum + n, 0)
    }
  }
})

export const CartStateModule = {
  set: (cart: Cart) => setRecoil(cartState, cart),
  add: (item: ProductType, amount: number) => {
    setRecoil(cartState, (pre) => {
      const newCart = [...pre]

      const targetCartValueIndex = pre.findIndex((v) => v.item.id === item.id)
      if (targetCartValueIndex !== -1) {
        newCart[targetCartValueIndex].amount += amount
      } else {
        newCart.push({ item, amount })
      }

      if (getRecoil(userState)) {
        updateCart(newCart)
      } else {
        Cookies.set('cart', JSON.stringify(newCart))
      }

      return newCart
    })
  },
  remove: (id: number) => {
    setRecoil(cartState, (pre) => {
      const newCart = pre.filter((v) => v.item.id !== id)

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
