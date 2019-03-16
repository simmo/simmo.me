import React from 'react'
import { css } from '@emotion/core'

import Logo from './Logo'
import Social from './Social'

const home = css`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding-bottom: 5vh;
  padding-right: 3rem;
  max-width: 30rem;

  @media (min-width: 30em) {
    justify-content: center;
  }
`

const logo = css`
  margin-bottom: 0.25em;
`

const intro = css`
  opacity: 0.8;
`

export default function Home() {
  return (
    <div css={home}>
      <h1 css={logo}>
        <Logo />
      </h1>
      <div css={intro}>
        <p>
          Hi, I’m Mike Simmonds, a UK based, Lead front-end developer living in Sussex, working in
          London.
          <br />
          Currently
          {' '}
          <a href="https://zonedigital.com">@Zone</a>
.
        </p>
        <p>
          I’ve spent over 10 years working across marketing and publishing sectors to deliver
          high-end web apps, sites and products.
        </p>
      </div>
      <Social />
    </div>
  )
}
