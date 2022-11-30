import { Heading, HeadingProps } from '@chakra-ui/react'
import React, { FC } from 'react'

export const Logo: FC<HeadingProps> = (props) => {
  return (
    <Heading
      textAlign="center"
      fontSize={30}
      lineHeight={8}
      color="green"
      {...props}
    >
      SHOP
      <br />
      APP
    </Heading>
  )
}
