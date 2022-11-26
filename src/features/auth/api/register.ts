import { axios } from '@/lib/axios'
import { User } from '@/features/auth/types'
import Cookies from 'js-cookie'

export const register = async (data: User) => {
  const sessionId = await axios.post<string>('/auth/register', data)

  if (typeof sessionId === 'string')
    Cookies.set('session', sessionId, { secure: true })
}
