import { axios } from '@/lib/axios'
import Cookies from 'js-cookie'
import { UserStateModule } from '@/features/auth/states/userState'

export const logout = async () => {
  await axios.post<string>('/auth/logout')

  Cookies.remove('session')
  UserStateModule.remove()
}
