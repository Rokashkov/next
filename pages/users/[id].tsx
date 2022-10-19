import Layout from '../../components/Layout'

export default function ({ user }) {
	const { id } = user
	return (
		<>
			<Layout>
				<div>Пользователь с id: { id }</div> 
			</Layout>
		</>
	)
}

export async function getServerSideProps(context) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/users/${ context.query.id }`)
	const user = await response.json()
	return {
		props: { user },
	}
}