import { User } from '@/features/auth/types'
import { axios } from '@/lib/axios'
import Cookies from 'js-cookie'

export const login = async (data: User) => {
  const sessionId = await axios.post<string>('/auth/login', data)

  if (typeof sessionId === 'string')
    Cookies.set('session', sessionId, { secure: true })
}
