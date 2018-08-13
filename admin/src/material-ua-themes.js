import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { blue, grey, amber, red } from '@material-ui/core/colors'

export const greyTheme = createMuiTheme({
  palette: {
    primary: blue,
    accent: amber,
    error: red,
    type: 'light'
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    fontSize: 12,
    htmlFontSize: 10
  }
})
