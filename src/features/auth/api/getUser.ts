import { axios } from '@/lib/axios'
import { User } from '@/features/auth/types'

export const getUser = (): Promise<User | null> => {
  return axios.get('/auth/me', { withCredentials: true })
}
