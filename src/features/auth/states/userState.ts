import { User } from '@/features/auth/types'
import { atom } from 'recoil'
import { resetRecoil, setRecoil } from 'recoil-nexus'

export const userState = atom<null | User>({ key: 'user', default: null })

export const UserStateModule = {
  set: (user: User | null) => setRecoil(userState, user),
  reset: () => resetRecoil(userState)
}
