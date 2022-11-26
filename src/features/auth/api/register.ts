import { axios } from '@/lib/axios'
import { User } from '@/features/auth/types'
import Cookies from 'js-cookie'
import { UserStateModule } from '@/features/auth/states/userState'

export const register = async (data: User) => {
  const sessionId = await axios.post<string>('/auth/register', data)

  if (typeof sessionId === 'string') {
    Cookies.set('session', sessionId, { secure: true })
    UserStateModule.set(data)
  }
}
