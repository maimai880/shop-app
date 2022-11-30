import { FC } from 'react'
import {
  Button,
  Flex,
  HStack,
  Image,
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

  const addToCart = () => {
    CartStateModule.add(data, valueAsNumber)
  }

  const { isOpen: isImageModalOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex
        flexDirection="column"
        alignItems="center"
        overflow="hidden"
        bg="white"
        _hover={{ boxShadow: 'lg' }}
      >
        <Image
          onClick={onOpen}
          src={data.image}
          alt={data.name}
          _hover={{
            transition: 'transform .3s ease-in',
            transform: 'scale(1.05)'
          }}
          cursor="zoom-in"
        />

        <Text fontSize="md" color="#666" align="center">
          {data.name}
        </Text>

        <Text as="strong" mb={1} fontSize="xl" color="#666">
          ￥{data.price}
        </Text>

        <HStack maxW="65%">
          <Button {...getDecrementButtonProps()} size="sm" rounded="full">
            -
          </Button>
          <Input {...getInputProps()} size="sm" px={0} textAlign="center" />
          <Button {...getIncrementButtonProps()} size="sm" rounded="full">
            +
          </Button>
        </HStack>

        <Button
          onClick={addToCart}
          w="80%"
          m={3}
          colorScheme="green"
          rounded={0}
        >
          ADD TO CART
        </Button>
      </Flex>

      <ImageModal product={data} isOpen={isImageModalOpen} {...{ onClose }} />
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
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      isCentered
      preserveScrollBarGap
    >
      <ModalOverlay overflowY="scroll" />
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
