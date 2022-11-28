import { FC } from 'react'
import {
  Button,
  Flex,
  HStack,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useDisclosure,
  useNumberInput
} from '@chakra-ui/react'
import { ProductType } from '@/features/products/types'
import styles from './products.module.css'
import { CartStateModule } from '@/features/cart/states/CartState'

interface Props {
  data: ProductType
}

export const Product: FC<Props> = ({ data }) => {
  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    valueAsNumber
  } = useNumberInput({
    step: 1,
    defaultValue: 1,
    min: 1
  })

  const { isOpen, onOpen, onClose } = useDisclosure()

  const addToCart = () => {
    CartStateModule.add(data, valueAsNumber)
  }

  return (
    <>
      <Flex
        bg="white"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
      >
        <img
          src={data.image}
          alt={data.name}
          className={styles.image}
          onClick={onOpen}
        />

        <Text fontSize="md" color="#666" align="center">
          {data.name}
        </Text>

        <Text
          fontSize="lg"
          as="b"
          color="#666"
          align="center"
          marginBottom="5px"
        >
          ￥{data.price}
        </Text>

        <HStack maxW="80%">
          <Button {...getDecrementButtonProps()} rounded="full" size="sm">
            -
          </Button>
          <Input {...getInputProps()} size="sm" />
          <Button {...getIncrementButtonProps()} rounded="full" size="sm">
            +
          </Button>
        </HStack>

        <Button onClick={addToCart} margin="15px" bg="#077915" color="white">
          ADD TO CART
        </Button>
      </Flex>

      <ImageModal product={data} {...{ isOpen, onClose }} />
    </>
  )
}

interface ImageModalProps {
  product: ProductType
  isOpen: boolean
  onClose: () => void
}

const ImageModal: FC<ImageModalProps> = (props) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <img src={props.product.image} />

        <ModalFooter bg="#f1f1f1" justifyContent="space-between">
          <Text>{props.product.name}</Text>
          <Text color="#077915" as="b">
            ￥{props.product.price}
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
