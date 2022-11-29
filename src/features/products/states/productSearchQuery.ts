import { atom } from 'recoil'
import { resetRecoil, setRecoil } from 'recoil-nexus'

export const productSearchQueryState = atom({
  key: 'productSearchQuery',
  default: ''
})

export const ProductSearchQueryModule = {
  set: (query: string) => setRecoil(productSearchQueryState, query),
  reset: () => resetRecoil(productSearchQueryState)
}
