import { axios } from '@/lib/axios'
import { LoginData, RegisterData, User } from '@/features/auth/types'
import Cookies from 'js-cookie'
import { UserStateModule } from '@/features/auth/states/userState'

export const register = async (data: LoginData) => {
  const res = await axios.post<RegisterData, { sessionId: string; user: User }>(
    '/auth/register',
    { ...data, cart: Cookies.get('cart') || '[]' }
  )

  Cookies.set('session', res.sessionId)
  Cookies.remove('cart')
  UserStateModule.set(res.user)
}
