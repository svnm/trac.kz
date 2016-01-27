import React from 'react'
import { Link } from 'react-router'
import styles from './Header.css'

function Header() {
  return (
    <header>
      <div className={styles.header}>

		<div className={styles.title}>
			<h3>trac.kz</h3>
		</div>

        <Link className={styles.tab} to="/">Home </Link>
        <Link className={styles.tab} to="/tracks">Trackz </Link>

      </div>
    </header>
  )
}

export default Header