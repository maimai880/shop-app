import React from 'react'
import styles from './home.module.css'
import { Flex, Heading } from '@chakra-ui/react'
import { ProductsList } from '@/features/products/components/ProductsList'

interface Props {}

export const Home: React.FC<Props> = () => {
  return (
    <>
      <header className={styles.header}>
        <Flex className={styles.headerContainer}>
          <Heading size="md" textAlign="center" color="#077915">
            SHOP
            <br />
            APP
          </Heading>
        </Flex>
      </header>
      <main className={styles.main}>
        <ProductsList />
      </main>
    </>
  )
}
