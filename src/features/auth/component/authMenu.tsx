import {
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList
} from '@chakra-ui/react'
import { ReactSVG } from 'react-svg'
import { userState } from '@/features/auth/states/userState'
import { useRecoilValue } from 'recoil'
import { logout } from '@/features/auth/api/logout'
import { MenuArrow } from '@/component/MenuArrow'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export const AuthMenu = () => {
  const user = useRecoilValue(userState)

  return (
    <Menu placement="bottom-end">
      <MenuButton>
        <IconButton
          icon={<ReactSVG src="src/features/auth/assets/user-flat-icon.svg" />}
          bg="transparent"
          aria-label="open user menu"
          fill="#077915"
        />
      </MenuButton>
      <MenuList>
        <MenuArrow placement="top-end" />

        <MenuItem isDisabled={!!user} icon={<ExternalLinkIcon />}>
          login
        </MenuItem>
        <MenuDivider />
        <MenuItem isDisabled={!user} onClick={logout}>
          logout
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
