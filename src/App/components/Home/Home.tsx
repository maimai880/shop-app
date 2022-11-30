import React from 'react'
import {
  Box,
  Center,
  Flex,
  IconButton,
  useDisclosure,
  VStack
} from '@chakra-ui/react'
import { ProductsList } from '@/features/products/components/ProductsList'
import { AuthMenu } from '@/features/auth/component/authMenu'
import { CartInformation } from '@/features/cart/components/cartInformation'
import { CartPreview } from '@/features/cart/components/CartPreview'
import { ProductSearchBar } from '@/features/products/components/ProductSearchBar'
import { ArrowBackIcon, SearchIcon } from '@chakra-ui/icons'
import { Logo } from '@/component/logo'

interface Props {}

export const Home: React.FC<Props> = () => {
  const { isOpen: isOpenSearchHeader, onOpen, onClose } = useDisclosure()

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
          {isOpenSearchHeader ? (
            <>
              <IconButton
                onClick={onClose}
                aria-label="close search bar"
                icon={<ArrowBackIcon h="100%" w="auto" color="green" />}
                bg="transparent"
                mr={3}
              />
              <ProductSearchBar />
            </>
          ) : (
            <>
              <Box mr={{ base: 'auto', sm: 9 }}>
                <Logo />
              </Box>

              <Box display={['none', 'inline']} maxW="500px" w="100%" mr={3}>
                <ProductSearchBar />
              </Box>
              <Box display={['inline', 'none']} h="100%">
                <IconButton
                  onClick={onOpen}
                  aria-label="open search bar"
                  icon={
                    <SearchIcon
                      display={['inline', 'none']}
                      h="100%"
                      w="auto"
                      color="green"
                    />
                  }
                  h="35px"
                  bg="transparent"
                />
              </Box>

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
            </>
          )}
        </Flex>
      </Center>

      <main>
        <ProductsList />
      </main>
    </VStack>
  )
}
