import {
  Box,
  Button,
  CloseButton,
  Flex,
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

  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <IconButton
          aria-label="open cart preview"
          icon={
            <img
              src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
              width="100%"
            />
          }
          bg="transparent"
          height="100%"
        />
      </PopoverTrigger>

      <PopoverContent w="360px">
        <PopoverArrow />

        <PopoverBody w="360px">
          <Box w="360px" h="320px" overflow="hidden">
            {cart.length ? (
              <List w="100%" h="100%" overflowY="scroll">
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

          <Button onClick={onCheckout} bg="#fc7710" color="white" w="100%">
            PROCEED TO CHECKOUT
          </Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

const ListItemComponent = ({ value }: { value: Cart[number] }) => {
  const removeFromCart = () => CartStateModule.remove(value.item.id)

  return (
    <ListItem _hover={{ bg: '#077915' }}>
      <Flex justifyContent="space-between">
        <Image src={value.item.image} width="48px" height="auto" />

        <VStack>
          <Text color="#999">{value.item.name}</Text>
          <Text as="strong" color="#999">
            ￥{value.item.price}
          </Text>
        </VStack>

        <VStack>
          <Text color="#999">
            {value.amount} No{value.amount > 1 && 's'}.
          </Text>
          <Text as="strong">￥{value.item.price}</Text>
        </VStack>

        <IconButton
          onClick={removeFromCart}
          aria-label="remove item from cart"
          icon={<CloseButton />}
        />
      </Flex>
    </ListItem>
  )
}
