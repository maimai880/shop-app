import { axios } from '@/lib/axios'
import { LoginData, User } from '@/features/auth/types'

export const register = (data: LoginData) => {
  return axios.post<LoginData, { sessionId: string; user: User }>(
    '/auth/register',
    data
  )
}
