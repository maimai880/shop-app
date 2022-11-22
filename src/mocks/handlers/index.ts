import { auth } from '@/mocks/handlers/auth'
import { cart } from '@/mocks/handlers/cart'
import { product } from '@/mocks/handlers/product'

export const handlers = [...auth, ...cart, ...product]
