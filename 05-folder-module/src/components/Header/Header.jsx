import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <h2 className={styles.logo}>This is the header</h2>
        <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Header