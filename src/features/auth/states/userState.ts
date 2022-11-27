import { LoginData, User } from '@/features/auth/types'
import { atom } from 'recoil'
import { resetRecoil, setRecoil } from 'recoil-nexus'
import { register } from '@/features/auth/api/register'
import Cookies from 'js-cookie'
import { login } from '@/features/auth/api/login'

export const userState = atom<null | User>({ key: 'user', default: null })

export const UserStateModule = {
  set: (user: User | null) => setRecoil(userState, user),
  remove: () => resetRecoil(userState),
  login: async (data: LoginData) => {
    const res = await login(data)

    Cookies.set('session', res.sessionId)
    UserStateModule.set(res.user)
  },
  register: async (data: LoginData) => {
    const res = await register(data)

    Cookies.set('session', res.sessionId)
    UserStateModule.set(res.user)
  }
}
