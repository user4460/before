// カラー選択用ボタン
import React, { FC } from 'react'
import { css } from '@emotion/core'

// style
import { colors } from '../../../style/components/atoms/Button'

interface IcolorBtn {
  clrType: string,
  setClrHandler: (color: string) => void
}

export const ColorBtn: FC<IcolorBtn> = ({ clrType, setClrHandler }) => {
  const txt = colors[clrType].txt

  return (
    <button css={ButtonCss(clrType)} onClick={() => setClrHandler(clrType)}>
      {txt}
    </button>
  )
}


const ButtonCss = (clrType: string) => css`
  background: ${colors[clrType].background};
  margin: 10px 15px 0 0;
  border: 1px solid #ccc;
  color: #333;
  font-size: 1.6rem;
  font-weight: bold;
  min-width: 100px;
  height: 40px;
  cursor: pointer;
`
