import React from 'react'
import { Box, Center } from '@chakra-ui/react'
import { LoginForm } from '@/features/auth/component/LoginForm'
import { Logo } from '@/component/logo'

interface Props {}

export const LoginPage: React.FC<Props> = (props) => {
  return (
    <Center width="100%" height="100%">
      <Box bg="white" p={4} position="relative">
        <Logo
          position="absolute"
          top="0"
          left="50%"
          transform="translate(-50%, -110%)"
          textAlign="center"
          fontSize={42}
          lineHeight={10}
          color="#077915"
        />

        <LoginForm />
      </Box>
    </Center>
  )
}
