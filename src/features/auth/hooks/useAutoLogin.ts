import { useEffect } from 'react'
import { UserStateModule } from '@/features/auth/states/userState'
import Cookies from 'js-cookie'
import { getUser } from '@/features/auth/api/getUser'
import { worker } from '@/mocks/browser'

export const useAutoLogin = () => {
  useEffect(() => {
    ;(async () => {
      UserStateModule.set(Cookies.get('session') ? await getUser() : null)
    })()
  }, [worker.start])
}
