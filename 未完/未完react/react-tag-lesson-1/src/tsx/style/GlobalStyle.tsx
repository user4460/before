import * as React from 'react'
import { Global, css } from '@emotion/core'
import { textClr } from '../style/variables'
import { reset } from './resetStyle'

// grobal-css
const globalStyle = css`
  ${reset}
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    color: ${textClr};
    font-size: 1.4rem;
  }
  button {
    outline: none;
  }
`

const GlobalStyle: React.FC = ({ children }) => {
  return (
    <div>
      <Global styles={globalStyle} />
      {children}
    </div>
  )
}

export default GlobalStyle
