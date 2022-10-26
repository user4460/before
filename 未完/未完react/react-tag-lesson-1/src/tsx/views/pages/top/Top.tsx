import React, { FC } from 'react'
import { hot } from 'react-hot-loader'
// component
import { PostBox } from './PostBox'

const Top: FC = () => (
  <main>
    <PostBox />
  </main>
)

export default hot(module)(Top)
