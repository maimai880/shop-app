import { User } from '@/features/auth/types'
import { axios } from '@/lib/axios'
import Cookies from 'js-cookie'
import { UserStateModule } from '@/features/auth/states/userState'

export const login = async (data: User) => {
  const sessionId = await axios.post<string>('/auth/login', data)

  if (typeof sessionId === 'string') {
    Cookies.set('session', sessionId, { secure: true })
    UserStateModule.set(data)
  }
}
