import React from 'react'
import { css } from '@emotion/core'

const logo = css`
  font-size: 2.2rem;
  font-weight: bold;
  letter-spacing: -0.07em;

  &::after {
    color: var(--accent-colour);
    content: '.';
  }
`

export default function Logo() {
  return <span css={logo}>Mike Simmonds</span>
}
