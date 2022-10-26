import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'react-router-dom'

// components
import { HeaderColorBtn } from '../../../views/components/atoms/HeaderColorBtn'
// style
import { HeaderContainer } from '../../../style/components/block/Header'

export default function Header() {
  return (
    <div css={HeaderContainer}>
      <h1>
        <Link to="/" css={TitleCss}>Tag React</Link>
      </h1>
      <div css={BtnsCss}>
        <HeaderColorBtn clrType="white" />
        <HeaderColorBtn clrType="blue" />
        <HeaderColorBtn clrType="green" />
        <HeaderColorBtn clrType="red" />
        <HeaderColorBtn clrType="yellow" />
      </div>
    </div>
  )
}

const BtnsCss = css`
  display: flex;
  margin-left: 50px;
`

const TitleCss = css`
  color: #fff;
  text-decoration: none;
`
