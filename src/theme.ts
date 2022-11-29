//theme.ts
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      html: {
        width: '100%',
        height: '100%',
        overflowY: 'scroll',
        overflowX: 'hidden'
      },
      body: {
        width: '100%',
        height: '100%',
        margin: 0,
        backgroundColor: '#f5f5f5',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale'
      },
      '#root': {
        width: '100%',
        height: '100%'
      },
      code: {
        fontFamily:
          'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace'
      }
    }
  }
})
