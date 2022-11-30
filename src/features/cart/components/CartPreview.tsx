import {
  Box,
  Button,
  CloseButton,
  IconButton,
  Image,
  List,
  ListItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
  VStack
} from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import { cartState, CartStateModule } from '@/features/cart/states/CartState'
import { Cart } from '@/features/cart/types'
import { userState } from '@/features/auth/states/userState'
import { useNavigate } from 'react-router-dom'

export const CartPreview = () => {
  const cart = useRecoilValue(cartState)
  const user = useRecoilValue(userState)
  const navigate = useNavigate()

  const onCheckout = () => {
    if (user) {
      console.log('開発中です')
    } else {
      navigate('/login')
    }
  }

  const { onOpen, onClose, isOpen } = useDisclosure()

  return (
    <Popover {...{ onOpen, onClose, isOpen }} placement="bottom-end">
      <PopoverTrigger>
        <IconButton
          icon={
            <img src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png" />
          }
          aria-label="open cart preview"
          isActive={isOpen}
          bg="transparent"
        />
      </PopoverTrigger>

      <PopoverContent w="360px" h="388px">
        <PopoverArrow />

        <PopoverBody p={0}>
          <Box w="100%" h="320px" overflow="hidden">
            {cart.length ? (
              <List
                w="100%"
                h="100%"
                overflowY="scroll"
                css={{
                  '&::-webkit-scrollbar': {
                    width: '8px',
                    backgroundColor: `transparent`
                  },
                  '&::-webkit-scrollbar-thumb': {
                    borderRadius: '8px',
                    backgroundColor: 'rgba(0, 0, 0, 0.1)'
                  }
                }}
              >
                {cart.map((v) => (
                  <ListItemComponent value={v} key={v.item.id} />
                ))}
              </List>
            ) : (
              <>
                <Image src="https://res.cloudinary.com/sivadass/image/upload/v1495427934/icons/empty-cart.png" />
                <Text align="center" color="#999">
                  Your cart is empty!
                </Text>
              </>
            )}
          </Box>

          <Box p={3}>
            <Button
              onClick={onCheckout}
              isDisabled={!cart.length}
              w="100%"
              colorScheme="orange"
            >
              PROCEED TO CHECKOUT
            </Button>
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

const ListItemComponent = ({ value }: { value: Cart[number] }) => {
  const removeFromCart = () => CartStateModule.remove(value.item.id)

  return (
    <ListItem
      display="flex"
      alignItems="center"
      w="100%"
      p={2}
      _hover={{ bg: 'rgba(147,220,156,.15)' }}
    >
      <Image src={value.item.image} width="48px" height="auto" />

      <VStack flexGrow={1} align="left" spacing={0} ml={2}>
        <Text color="#999">{value.item.name}</Text>
        <Text as="strong" color="#999">
          ￥{value.item.price}
        </Text>
      </VStack>

      <VStack spacing={0} ml={2}>
        <Text color="#999" textAlign="right">
          {value.amount} No{value.amount > 1 && 's'}.
        </Text>
        <Text as="strong" textAlign="right">
          ￥{value.item.price}
        </Text>
      </VStack>

      <IconButton
        onClick={removeFromCart}
        aria-label="remove item from cart"
        icon={<CloseButton color="#ccc" />}
        ml={3}
        bg="transparent"
      />
    </ListItem>
  )
}
