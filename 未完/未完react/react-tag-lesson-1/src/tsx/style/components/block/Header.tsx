import { css } from '@emotion/core'
import { themeClr } from '../../../style/variables'

// どっちの書き方でもOK！
export const HeaderContainer = css({
  width: '100%',
  height: '50px',
  padding: '0 20px',
  backgroundColor: themeClr,
  display: 'flex',
  alignItems: 'center',
  color: '#ffffff'
})
