import React from 'react'
import { Box, Center, Flex, Heading, VStack } from '@chakra-ui/react'
import { ProductsList } from '@/features/products/components/ProductsList'
import { AuthMenu } from '@/features/auth/component/authMenu'
import { CartInformation } from '@/features/cart/components/cartInformation'
import { CartPreview } from '@/features/cart/components/CartPreview'
import { ProductSearchBar } from '@/features/products/components/ProductSearchBar'

interface Props {}

export const Home: React.FC<Props> = () => {
  return (
    <VStack>
      <Center
        as="header"
        position="sticky"
        top={0}
        w="100%"
        h={{ base: '68px', lg: '98px' }}
        p={5}
        bg="white"
        boxShadow="0 8px 18px rgb(0 0 0 / 3%)"
        zIndex={3}
      >
        <Flex as="nav" align="center" w="900px" h="100%">
          <Box mr={{ base: 'auto', sm: '4%' }}>
            <Heading
              textAlign="center"
              fontSize={30}
              lineHeight={8}
              color="green"
            >
              SHOP
              <br />
              APP
            </Heading>
          </Box>

          <ProductSearchBar />

          <Box
            display={{ base: 'none', lg: 'inline' }}
            ml="auto"
            overflow="visible"
          >
            <CartInformation />
          </Box>
          <Center ml={{ base: 3, sm: 'auto', md: 'auto', lg: 3 }}>
            <CartPreview />
          </Center>

          <Center ml={2}>
            <AuthMenu />
          </Center>
        </Flex>
      </Center>

      <main>
        <ProductsList />
      </main>
    </VStack>
  )
}
