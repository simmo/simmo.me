import React from 'react'
import { css } from '@emotion/core'

import useSiteMeta from '../hooks/useSiteMeta'
import socialData from '../common/social'

const list = css`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-top: 4em;
  padding: 0;
`

const item = css`
  display: block;

  & + & {
    margin-left: 1.8em;
  }
`

const link = css`
  color: var(--primary-text-colour);
  display: block;
  fill: currentColor;
  height: 1.4em;
  transition-duration: 0.2s;
  transition-property: color, opacity;
  transition-timing-function: ease-out;
  width: 1.4em;

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }

  &:hover,
  &:focus {
    color: var(--accent-colour);
  }
`

export default function Social() {
  const { social } = useSiteMeta()

  return (
    <ul css={list}>
      {Object.entries(social).map(([key, url]) => {
        const { icon: Icon, text } = socialData[key]

        return (
          <li css={item} key={key}>
            <a
              css={link}
              href={url}
              aria-label={text}
              title={text}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
