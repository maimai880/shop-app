import React from 'react'
import { useRecoilValue } from 'recoil'
import { cartInformationState } from '@/features/cart/states/CartState'
import { Table, TableContainer, Tbody, Td, Tr } from '@chakra-ui/react'

interface Props {}

export const CartInformation: React.FC<Props> = (props) => {
  const cartInformation = useRecoilValue(cartInformationState)

  return (
    <TableContainer>
      <Table size="sm" variant="unstyled">
        <Tbody>
          <Tr>
            <Td>No. of items</Td>
            <Td>:</Td>
            <Td textAlign="right">
              <strong>{cartInformation.quantity || 0}</strong>
            </Td>
          </Tr>
          <Tr>
            <Td>Sub Total</Td>
            <Td>:</Td>
            <Td textAlign="right">
              <strong>{cartInformation.total}</strong>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  )
}
