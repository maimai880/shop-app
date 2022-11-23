import { FC } from 'react'
import {
  Button,
  Flex,
  HStack,
  Input,
  Text,
  useNumberInput
} from '@chakra-ui/react'
import { ProductType } from '@/features/products/types'

interface Props {
  data: ProductType
}

export const Product: FC<Props> = ({ data }) => {
  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    value
  } = useNumberInput({
    step: 1,
    defaultValue: 0,
    min: 0
  })

  return (
    <Flex
      bg="white"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <img src={data.image} alt={data.name} />

      <Text fontSize="md" color="#666" align="center">
        {data.name}
      </Text>

      <Text fontSize="lg" as="b" color="#666" align="center" marginBottom="5px">
        ￥{data.price}
      </Text>

      <HStack maxW="80%">
        <Button {...getDecrementButtonProps()} rounded="full">
          -
        </Button>
        <Input {...getInputProps()} />
        <Button {...getIncrementButtonProps()} rounded="full">
          +
        </Button>
      </HStack>

      <Button margin="15px" bg="#0aa91d" color="white">
        ADD TO CART
      </Button>
    </Flex>
  )
}
