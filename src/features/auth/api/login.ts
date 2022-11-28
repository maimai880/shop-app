import { LoginData, User } from '@/features/auth/types'
import { axios } from '@/lib/axios'
import { UserStateModule } from '@/features/auth/states/userState'
import Cookies from 'js-cookie'
import { CartStateModule } from '@/features/cart/states/CartState'

export const login = async (data: LoginData) => {
  const res = await axios.post<
    LoginData,
    { sessionId: string; user: User & { cart: string } }
  >('/auth/login', data)

  Cookies.set('session', res.sessionId)
  Cookies.remove('cart')
  UserStateModule.set(res.user)
  CartStateModule.set(JSON.parse(res.user.cart))
}
