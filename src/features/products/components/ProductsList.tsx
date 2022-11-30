import {
  Center,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Text,
  VStack
} from '@chakra-ui/react'
import { useProducts } from '@/features/products/api/getProducts'
import { Product } from '@/features/products/components/Product'
import { useRecoilValue } from 'recoil'
import { productSearchQueryState } from '@/features/products/states/productSearchQuery'

export const ProductsList = () => {
  const query = useRecoilValue(productSearchQueryState)
  const productsQuery = useProducts({ query })

  if (productsQuery.isLoading) {
    return (
      <Center width="100%" height="100%">
        <Spinner size="xl" />
      </Center>
    )
  } else if (!productsQuery.data?.length) {
    return (
      <Center>
        <VStack>
          <Image
            src="https://res.cloudinary.com/sivadass/image/upload/v1494699523/icons/bare-tree.png"
            alt="Empty Tree"
          />
          <Heading size="lg" textAlign="center" color="#666">
            Sorry, no products matched your search!
          </Heading>
          <Text color="#999">Enter a different keyword and try.</Text>
        </VStack>
      </Center>
    )
  }

  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing="32px" p={6} maxW="960px">
      {productsQuery.data.map((p) => (
        <Product data={p} key={p.id} />
      ))}
    </SimpleGrid>
  )
}
