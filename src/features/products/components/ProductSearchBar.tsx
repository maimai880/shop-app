import { Flex, IconButton, Input } from '@chakra-ui/react'
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
    <Flex w="100%">
      <Input
        value={value}
        onChange={handleChange}
        placeholder="Search for Vegetables and Fruits"
        maxW="410px"
        border="1px solid green !important"
        rounded={0}
      />
      <IconButton
        icon={<SearchIcon color="white" />}
        aria-label="search products"
        w="90px"
        ml="0px !important"
        colorScheme="green"
        rounded={0}
      />
    </Flex>
  )
}
