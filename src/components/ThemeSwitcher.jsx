import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { Moon, Sun } from './Icons'

const button = css`
  appearance: none;
  background: none;
  border: 0;
  border-radius: 0;
  color: inherit;
  display: inline-block;
  font: inherit;
  margin: 0;
  padding: 0;
  line-height: 1;
  outline: none;
`

const track = css`
  box-sizing: content-box;
  background-color: #000;
  border-radius: 5rem;
  align-items: center;
  justify-content: space-around;
  display: flex;
  padding: 2px;
  position: relative;
  height: 1.5rem;
  width: 3.5rem;
`

const thumb = css`
  display: block;
  background-color: #fff;
  border-radius: 100%;
  position: absolute;
  top: 2px;
  left: 2px;
  height: 1.5rem;
  width: 1.5rem;
  transition: transform 0.2s;

  *:focus & {
    box-shadow: 0 0 2px 3px var(--accent-colour);
  }

  [aria-pressed='true'] & {
    transform: translateX(2rem);
  }
`

const icon = css`
  color: #fff;
  display: block;
  height: 100%;
  padding: 0.2rem;
  width: 50%;

  > svg {
    height: 100%;
    object-fit: contain;
    width: 100%;
  }
`

export default function ThemeSwitcher({ isDark, ...props }) {
  return (
    <button
      type="button"
      aria-pressed={isDark ? 'true' : 'false'}
      css={button}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'}`}
      {...props}
    >
      <span css={track}>
        <span css={thumb} />
        <span css={icon} aria-hidden>
          <Moon />
        </span>
        <span css={icon} style={{ color: '#ffc107' }} aria-hidden>
          <Sun />
        </span>
      </span>
    </button>
  )
}

ThemeSwitcher.propTypes = {
  isDark: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
}
