import Header from './Header'
import Main from './Main'

interface LayoutProps {
	children: JSX.Element | JSX.Element[]
}

function Layout (props: LayoutProps) {
	return (
		<>
			<Header/>
			<Main>
				{ props.children }
			</Main>
		</>
	)
}

export default Layout