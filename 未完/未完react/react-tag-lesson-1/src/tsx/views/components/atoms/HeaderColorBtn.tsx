// カラーごとのページ
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { css } from '@emotion/core'


//style
import { colors } from '../../../style/components/atoms/Button'

interface IHeaderColorBtn {
  clrType: string
}

export const HeaderColorBtn: FC<IHeaderColorBtn> = ({ clrType }) => (
  <Link
    to={`/list/${clrType}`}
    css={HeaderColorBtnCss(clrType)}
  >
    {colors[clrType].txt}一覧
  </Link>
)

const HeaderColorBtnCss = (clrType: string) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  padding: 0 5px;
  margin-right: 10px;
  color: #333;
  background: ${colors[clrType].background};
  text-decoration: none;
  border-radius: 5px;
`
