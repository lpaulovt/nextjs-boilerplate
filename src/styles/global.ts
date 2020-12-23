import { create } from 'domain'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body #__next {
height: 100%;
}

html{
  font-size: 62.5%; //REM
}

body {
  font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
`

export default GlobalStyles
