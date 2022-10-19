import Layout from '../components/Layout'

function Users ({ users }) {
	return (
		<>
			<Layout>
				<div>There are some users:</div>
				<ul>
					{
						users.map((user) => {
							return (
								<a href={ `/users/${ user.id }` } key={ user.id }>
									<li key={ user.id }>{ user.name }</li>
								</a>
							)
						})
					}
				</ul>
			</Layout>	
		</>
	)
}

export default Users

export async function getStaticProps(context) {
	const response = await fetch('https://jsonplaceholder.typicode.com/users')
	const users = await response.json()
	return {
		props: { users },
	}
}