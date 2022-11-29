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
        display={['none', 'inline']}
        placeholder="Search for Vegetables and Fruits"
        w="42%"
        border="1px solid green !important"
        rounded={0}
      />
      <IconButton
        icon={<SearchIcon color="white" />}
        aria-label="search products"
        display={['none', 'inline']}
        w="90px"
        ml="0px !important"
        mr={3}
        colorScheme="green"
        rounded={0}
      />

      <SearchIcon
        display={['inline', 'none']}
        h="100%"
        w="auto"
        color="green"
      />
    </>
  )
}
