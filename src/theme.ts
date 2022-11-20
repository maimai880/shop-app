//theme.ts
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: '#f5f5f5'
      },
      html: {
        height: '100%',
        overflowY: 'scroll',
        overflowX: 'hidden'
      }
    }
  }
})
