import { axios } from '@/lib/axios'
import { User } from '@/features/auth/types'

export const getUser = (): Promise<{ cart: string } & User> => {
  return axios.get('/auth/me', { withCredentials: true })
}
