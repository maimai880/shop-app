import React from 'react'
import { Box, Center, Heading } from '@chakra-ui/react'
import { LoginForm } from '@/features/auth/component/LoginForm'

interface Props {}

export const LoginPage: React.FC<Props> = (props) => {
  return (
    <Center width="100%" height="100%">
      <Box bg="white" p={4} position="relative">
        <Heading
          position="absolute"
          top="0"
          left="50%"
          transform="translate(-50%, -105%)"
          textAlign="center"
          color="#077915"
        >
          SHOP
          <br />
          APP
        </Heading>

        <LoginForm />
      </Box>
    </Center>
  )
}
