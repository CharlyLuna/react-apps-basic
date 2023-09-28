import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { mainTheme } from './theme'

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
