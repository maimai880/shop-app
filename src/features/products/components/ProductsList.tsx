import { Center, SimpleGrid, Spinner } from '@chakra-ui/react'
import { useProducts } from '@/features/products/api/getProducts'

export const ProductsList = () => {
  const productsQuery = useProducts()

  if (productsQuery.isLoading) {
    return (
      <Center width="100%" height="100%">
        <Spinner size="xl" />
      </Center>
    )
  }

  return <SimpleGrid columns={[1, 2, 3, 4]}></SimpleGrid>
}
