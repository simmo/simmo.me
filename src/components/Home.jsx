import React from 'react'

import styles from '../styles/home.module.css'

import Logo from './Logo'
import Social from './Social'

export default function Home() {
  return (
    <div className={styles.home}>
      <h1 className={styles.logo}>
        <Logo />
      </h1>
      <div className={styles.intro}>
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
