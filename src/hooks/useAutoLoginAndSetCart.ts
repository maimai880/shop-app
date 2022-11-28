import { useEffect } from 'react'
import { UserStateModule } from '@/features/auth/states/userState'
import Cookies from 'js-cookie'
import { getUser } from '@/features/auth/api/getUser'
import { worker } from '@/mocks/browser'
import { CartStateModule } from '@/features/cart/states/CartState'

export const useAutoLoginAndSetCart = () => {
  useEffect(() => {
    ;(async () => {
      if (Cookies.get('session')) {
        const user = await getUser()

        UserStateModule.set(user)
        CartStateModule.set(JSON.parse(user.cart))
      } else {
        CartStateModule.set(JSON.parse(Cookies.get('cart') || '[]'))
      }
    })()
  }, [worker.start])
}
