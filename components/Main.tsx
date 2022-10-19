interface MainProps {
	children: JSX.Element | JSX.Element[]
}

function Main (props: MainProps) {
	return (
		<main>
			{ props.children }
		</main>
	)
}

export default Main