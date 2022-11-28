import { axios } from '@/lib/axios'
import Cookies from 'js-cookie'
import { UserStateModule } from '@/features/auth/states/userState'
import { CartStateModule } from '@/features/cart/states/CartState'

export const logout = async () => {
  await axios.post<string>('/auth/logout')

  Cookies.remove('session')
  UserStateModule.reset()
  CartStateModule.reset()
}
