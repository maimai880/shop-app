import { IconButton, Input } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { ChangeEvent } from 'react'
import { useRecoilValue } from 'recoil'
import {
  ProductSearchQueryModule,
  productSearchQueryState
} from '@/features/products/states/productSearchQuery'

export const ProductSearchBar = () => {
  const value = useRecoilValue(productSearchQueryState)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    ProductSearchQueryModule.set(e.target.value)
  }

  return (
    <>
      <Input
        value={value}
        onChange={handleChange}
        w="50%"
        placeholder="Search for Vegetables and Fruits"
      />
      <IconButton icon={<SearchIcon />} aria-label="search products" />
    </>
  )
}
