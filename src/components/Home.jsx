import React from 'react'
import { css } from '@emotion/core'
import { animated, useTrail } from 'react-spring'

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

const config = { mass: 1, tension: 120, friction: 14 }

const toStyle = ({ y, ...rest }) => ({
  ...rest,
  transform: y.interpolate(value => `translate3d(0,${value}px,0)`),
})

export default function Home() {
  const trail = useTrail(4, {
    config,
    opacity: 1,
    y: 0,
    from: { opacity: 0, y: -10 },
  })

  return (
    <div css={home}>
      <animated.h1 css={logo} style={toStyle(trail[0])}>
        <Logo />
      </animated.h1>
      <div css={intro}>
        <animated.p style={toStyle(trail[1])}>
          Hi, I’m Mike, a UK based, Lead front-end developer living in Sussex, working in
          London.
          <br />
          Currently
          {' '}
          <a href="https://zonedigital.com">@Zone</a>
.
        </animated.p>
        <animated.p style={toStyle(trail[2])}>
          I’ve spent over 10 years working across marketing and publishing sectors to deliver
          high-end web apps, sites and products.
        </animated.p>
      </div>
      <animated.div style={toStyle(trail[3])}>
        <Social />
      </animated.div>
    </div>
  )
}
