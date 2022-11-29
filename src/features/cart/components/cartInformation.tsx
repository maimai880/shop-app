import React, { ReactNode } from 'react'
import { useRecoilValue } from 'recoil'
import { cartInformationState } from '@/features/cart/states/CartState'
import { Table, TableContainer, Tbody, Td, Tr } from '@chakra-ui/react'

interface Props {}

export const CartInformation: React.FC<Props> = (props) => {
  const cartInformation = useRecoilValue(cartInformationState)

  return (
    <TableContainer>
      <Table
        size="sm"
        variant="unstyled"
        fontSize={14}
        color="green"
        textAlign="right"
      >
        <Tbody>
          <Tr>
            <Cell>No. of items</Cell>
            <Cell>:</Cell>
            <Cell>
              <strong>{cartInformation.quantity || 0}</strong>
            </Cell>
          </Tr>
          <Tr>
            <Cell>Sub Total</Cell>
            <Cell>:</Cell>
            <Cell>
              <strong>{cartInformation.total}</strong>
            </Cell>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  )
}

const Cell = ({ children }: { children: ReactNode }) => {
  return (
    <Td p="0 4px" textAlign="right">
      {children}
    </Td>
  )
}
