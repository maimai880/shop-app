import {
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList
} from '@chakra-ui/react'
import { ReactSVG } from 'react-svg'
import { userState } from '@/features/auth/states/userState'
import { useRecoilValue } from 'recoil'
import { logout } from '@/features/auth/api/logout'
import { MenuArrow } from '@/component/MenuArrow'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'

export const AuthMenu = () => {
  const user = useRecoilValue(userState)
  const navigate = useNavigate()

  const goToLoginPage = () => {
    navigate('/login')
  }

  return (
    <Menu placement="bottom-end">
      <MenuButton
        as={IconButton}
        icon={
          <ReactSVG
            src="src/features/auth/assets/user-flat-icon.svg"
            beforeInjection={(svg) => {
              svg.style.height = '42px'
              svg.style.width = '44px'
              svg.style.fill = 'green'
            }}
          />
        }
        aria-label="open auth menu"
        bg="transparent"
      />
      <MenuList>
        <MenuArrow placement="top-end" />

        <MenuGroup title={`user: ${user?.name || 'guest'}`}>
          <MenuItem
            isDisabled={!!user}
            icon={<ExternalLinkIcon />}
            onClick={goToLoginPage}
          >
            login
          </MenuItem>
          <MenuDivider />
          <MenuItem isDisabled={!user} onClick={logout}>
            logout
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  )
}
