import Layout from '../components/Layout'

function HomePage ({ post }) {
	
	return (
		<>
			<Layout>
				<p>Welcome to Next.ts!</p>
				<h1>{ post.title }</h1>
				<p>{ post.content }</p>
			</Layout>
		</>
	)
}

export default HomePage

export async function getStaticProps(context) {
	const response = await fetch('http://localhost:5000/api/post/?id=4')
	const post = await response.json()
	return {
		props: { post },
	}
}