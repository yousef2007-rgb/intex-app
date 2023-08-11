//Components with default exports
// import Header from '../components/ui/Header';
// import Intro from '../components/HomePageComponents/Intro';
import ProductsContainerBody from '../components/HomePageComponents/ProductsContainerBody';
// import Footer from '../components/ui/Footer/Footer';
import WhatsappButton from '../components/ui/WhatsappButton';
import content from '../data/HomePage.json';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../components/ui/Header'));
const Intro = dynamic(() => import('../components/HomePageComponents/Intro'));
const Footer = dynamic(() => import('../components/ui/Footer/Footer'));

//Components without default exports
import { HeadComponent } from '../components/HomePageComponents/HeadComponent';
import { useRouter } from 'next/router';

//SSR Fetching Function
export async function getServerSideProps(context) {
	const res = await fetch(
		`https://orders.fore-site.net/media_admin/api/api_secure.php?module=inventory&method=category_products&sk1=DICOSECSK1oolshdsf33sadGGHsd376&debug=yes&device_id=33333333&data=1&filter1=55&lang=${
			context.query.lang == 'arabic' ? 'ar' : 'en'
		}&username=28&field_subcategory=151`
	);
	const data = await res.json();
	context.res.setHeader(
		'Cache-Control',
		's-maxage=1, stale-while-revalidate'
	);
	return { props: { data, isLoading: false } };
}

//Main Component
export default function HomePage({ data, isLoading }) {
	//Components Props
	const IntroProps = [
		{
			src: '/Assets/images/intro/categories-05.jpg',
			link: '/Products/342?title=pools',
			aspectRatio: '16/7',
			text: { en: 'Above Ground Pools', ar: 'مسابح كبيرة' },
		},
		{
			src: '/Assets/images/intro/categories-03.jpg',
			link: '/Products/343?title=inflated%20pools',
			aspectRatio: '1/1',
			text: { en: 'inflatable pools', ar: 'برك نفخ' },
		},
		{
			src: '/Assets/images/intro/categories-02.jpg',
			link: '/Products/1515?title=inflated%20products',
			aspectRatio: '1/1',
			text: { en: 'inflatable products', ar: 'منتجات نفخ' },
		},
		{
			src: '/Assets/images/intro/categories-01.jpg',
			link: '/Products/344?title=accessories',
			aspectRatio: '1/1',
			text: { en: 'accessories', ar: 'اكسسوارات' },
		},
		{
			src: '/Assets/images/intro/categories-04.jpg',
			link: '/Products/1944?title=furniture',
			aspectRatio: '1/1',
			text: { en: 'furniture', ar: 'اثاث' },
		},
	];

	const { lang } = useRouter().query;
	const welcoming =
		lang == 'arabic' ? content.welcoming.arabic : content.welcoming.english;
	return (
		<>
			<HeadComponent />
			<Header />
			<main className="mx-auto mt-20 max-w-7xl font-bold tablet:mt-32">
				<p className="pt-6 text-center text-4xl uppercase text-blue_gray tablet:mt-32">
					{lang == 'arabic'
						? content.categories.arabic
						: content.categories.english}
				</p>
				<Intro intros={IntroProps} />
				<ProductsContainerBody data={data} />
				<article className=" px-5 py-10 text-center ">
					<h1 className="py-4 text-center text-4xl uppercase text-blue_gray">
						{welcoming[0]}
					</h1>
					<p className=" text- text-gray px-5 text-gray-700">
						{welcoming[1]}
					</p>
				</article>
			</main>
			<Footer />
			<WhatsappButton />
		</>
	);
}
