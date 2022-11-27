import { LoginData, User } from '@/features/auth/types'
import { axios } from '@/lib/axios'

export const login = (data: LoginData) => {
  return axios.post<LoginData, { sessionId: string; user: User }>(
    '/auth/login',
    data
  )
}
