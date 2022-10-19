import Link from 'next/link'
import { useRouter } from 'next/router'

interface AProps {
	href: string
	children: string
	className: string
	activeClassName: string
}

function A (props: AProps) {
	const router = useRouter()
	return (
			<Link href={ props.href }>
				<a
					className={ `${ props.className }${ (router.pathname.startsWith(props.href) && props.href !== '/') || props.href === router.pathname ? ' ' + props.activeClassName : '' }` }
				>{ props.children }</a>
			</Link>
	)
}

export default A