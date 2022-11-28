import { ProductType } from '@/features/products/types'

export type Cart = Array<{
  item: ProductType
  amount: number
}>
