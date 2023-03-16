import { useRouter } from 'next/router';
import React from 'react';
import Head from 'next/head';
import Header from '../../components/ui/Header';
import Intro from '../../components/ui/Intro/Intro';
import ProductsContainer from '../../components/ui/ProductsContainer/ProductsContainer';
import useData from '../../hooks/useData';
import Footer from '../../components/ui/Footer/Footer';

export async function getServerSideProps(context) {
	const res = await fetch(process.env.NEXT_PUBLIC_URL);
	const data = await res.json();
	context.res.setHeader(
		'Cache-Control',
		'public, s-maxage=50, stale-while-revalidate=59'
	);
	return { props: { data, isLoading: false } };
}

export default function HomePage({ isLoading, data }) {
	const router = useRouter();
	const products = router.query;
	return (
		<>
			<Head>
				<title>
					Intex Jo | {products.title} Official Distributor for Intex
					In Jordan
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
			<main className="mx-auto mt-20 flex h-screen max-w-7xl flex-col tablet:mt-0">
				<ProductsContainer
					number={products.products}
					limit={0}
					title={products.title}
					data={data}
					isLoading={isLoading}
					loadingAllowed={true}
				/>
			</main>
			<Footer />
		</>
	);
}
