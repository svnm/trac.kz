import React from 'react'
import { Link } from 'react-router'
import styles from './Header.css'

function Header() {
  return (
    <header>
      <div className={styles.header}>

        <Link className={styles.dark} to="/">Home </Link>
        <Link className={styles.light} to="/tracks">Trackz </Link>

      </div>
    </header>
  )
}

export default Header