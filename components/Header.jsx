import Link from 'next/link'
import React from 'react'
import styles from '../styles/Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.header_nav}>
                <div className={styles.nav_logo}>
                    <Link href='/'>NextJS Tutorial</Link>
                </div>
                <ul className={styles.nav_list}>
                    <li className={styles.nav_item}>
                        <Link href='/'>Inicio</Link>
                    </li>
                    <li className={styles.nav_item}>
                        <Link href='/posts'>Items</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
