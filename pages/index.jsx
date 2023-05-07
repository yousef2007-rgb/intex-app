//Components with default exports
import Header from '../components/ui/Header';
import Intro from '../components/HomePageComponents/Intro';
import ProductsContainerBody from '../components/HomePageComponents/ProductsContainerBody';
import Footer from '../components/ui/Footer/Footer';
import WhatsappButton from '../components/ui/WhatsappButton';

//Components without default exports
import { HeadComponent } from '../components/HomePageComponents/HeadComponent';

//SSR Fetching Function
export async function getServerSideProps(context) {
	const res = await fetch(
		'https://orders.fore-site.net/media_admin/api/api_secure.php?module=inventory&method=category_products&sk1=DICOSECSK1oolshdsf33sadGGHsd376&debug=yes&device_id=33333333&data=1&filter1=55&lang=en&username=28&field_subcategory=151'
	);
	const data = await res.json();
	context.res.setHeader(
		'Cache-Control',
		'public, s-maxage=50, stale-while-revalidate=59'
	);
	return { props: { data, isLoading: false } };
}

//Main Component
export default function HomePage({ data, isLoading }) {
	//Components Props
	const IntroProps = [
		{
			src: '/Assets/images/intro/categories-03.jpg',
			link: '/Products/343?title=inflated%20pools',
			aspectRatio: '1/1',
		},
		{
			src: '/Assets/images/intro/categories-02.jpg',
			link: '/Products/1515?title=inflated%20products',
			aspectRatio: '1/1',
		},
		{
			src: '/Assets/images/intro/categories-05.jpg',
			link: '/Products/342?title=pools',
			aspectRatio: '16/7',
		},
		{
			src: '/Assets/images/intro/categories-01.jpg',
			link: '/Products/344?title=accessories',
			aspectRatio: '1/1',
		},
		{
			src: '/Assets/images/intro/categories-04.jpg',
			link: '/Products/1944?title=furniture',
			aspectRatio: '1/1',
		},
	];

	return (
		<>
			<HeadComponent />
			<Header />
			<main className="mx-auto mt-20 max-w-7xl tablet:mt-0">
				<Intro intros={IntroProps} />
				<ProductsContainerBody data={data} />
			</main>
			<Footer />
			<WhatsappButton />
		</>
	);
}
