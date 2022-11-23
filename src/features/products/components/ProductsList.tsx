import { Center, SimpleGrid, Spinner } from '@chakra-ui/react'
import { useProducts } from '@/features/products/api/getProducts'
import { Product } from '@/features/products/components/Product'
import styles from './products.module.css'

export const ProductsList = () => {
  const productsQuery = useProducts()

  if (productsQuery.isLoading) {
    return (
      <Center width="100%" height="100%">
        <Spinner size="xl" />
      </Center>
    )
  } else if (!productsQuery.data) {
    return null
  }

  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing="32px" className={styles.list}>
      {productsQuery.data.map((p) => (
        <Product data={p} key={p.name} />
      ))}
    </SimpleGrid>
  )
}
