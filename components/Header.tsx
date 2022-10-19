import styles from '../styles/Header.module.css'
import A from './A'

function Header () {
	return (
		<header className={ styles.header }>
			<nav className={ styles.header__nav }>
			<A
				href='/'
				className={ styles.header__nav__item }
				activeClassName={ styles.current }
			>Main Page</A>
			<A
				href='/users'
				className={ styles.header__nav__item }
				activeClassName={ styles.current }
			>Users</A>
			</nav>
		</header>
	)
}

export default Header