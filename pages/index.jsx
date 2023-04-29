import React from 'react';
import Head from 'next/head';
import Header from '../components/ui/Header';
import Intro from '../components/ui/Intro/Intro';
import ProductsContainerBody from '../components/ui/ProductsContainer/ProductsContainerBody';
import Footer from '../components/ui/Footer/Footer';
import WhatsappButton from '../components/ui/WhatsappButton';

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

export default function HomePage({ data, isLoading }) {
	return (
		<div>
			<Head>
				<title>
					Intex Jo | Official Distributor for Intex In Jordan
				</title>

				<meta
					name="keywords"
					content="مسابح جاهزه للبيع في الأردن, IntexJo, intex jo, intex, intex jordan, intex product, Swimming pools, above ground pools, outdoor pools, pools, air mattress, airbeds, inflatable spas, spas, purespa, portable spa, dura-beam airbeds, premaire airbeds, realtree airbeds, air furniture, inflatable furniture, pool floats, pool toys, inflatable boats, boats, hot tubs, برك سباحة intex , برك سباحة للاطفال , برك سباحة متنقلة , ,مسابح ,مسابح في الأردن , مسبح نفخ, نفخ , برك سباحة في الاردن , "
				></meta>
				<meta
					property="og:title"
					content="Intex Jo | Official Distributor for Intex In Jordan"
				/>
				<meta property="og:type" content="products" />
				<meta property="og:url" content="https://www.intexjo.com/" />
				<meta
					property="og:image"
					content="https://www.intexjo.com/Assets/images/www.intexjo.com.png"
				/>
				<meta
					property="og:description"
					content="official distrubutor of intex in jordan that sells all kinds of pools ,pools equipment and accesories"
				/>
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@intex-jo" />
				<meta
					name="twitter:title"
					content="Intex Jo | Official Distributor for Intex In Jordan"
				/>
				<meta
					name="twitter:description"
					content="official distrubutor of intex in jordan that sells all kinds of pools ,pools equipment and accesories"
				/>
				<meta
					name="twitter:image"
					content="https://www.intexjo.com/Assets/images/www.intexjo.com.png"
				/>
				<link rel="icon" href="/icon.jpg" />
			</Head>
			<Header />
			<main className="mx-auto mt-20 max-w-7xl tablet:mt-0">
				<Intro
					intros={[
						{
							src: '/Assets/images/intro/hero1.jpg',
							link: '/Products/343?title=inflated%20pools',
							aspectRatio: '1/1',
						},
						{
							src: '/Assets/images/intro/hero4.gif',
							link: '/Products/343?title=inflated%20pools',
							aspectRatio: '1/1',
						},
						{
							src: '/Assets/images/intro/hero3.jpg',
							link: '/',
							aspectRatio: '16/7',
						},
						{
							src: '/Assets/images/intro/hero5.gif',
							link: '/Products/344?title=accessories',
							aspectRatio: '1/1',
						},
						{
							src: '/Assets/images/intro/hero2.jpg',
							link: '/Products/343?title=inflated%20pools',
							aspectRatio: '1/1',
						},
					]}
				/>
				<ProductsContainerBody data={data} />
			</main>
			<Footer />
			<WhatsappButton />
		</div>
	);
}
