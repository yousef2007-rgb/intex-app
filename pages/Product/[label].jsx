import React from 'react';
import Head from 'next/head';
import Header from '../../components/ui/Header';
import ProductsContainer from '../../components/ui/ProductsContainer/ProductsContainer';
import useData from '../../Hooks/useData';
import { useSelector } from 'react-redux';
import componentData from '../../data/ProductPage.json';
import ProductDetails from './ProductDetails';
import Footer from '../../components/ui/Footer/Footer';

export async function getServerSideProps(context) {
	const res = await fetch(
		`https://orders.fore-site.net/media_admin/api/api_secure.php?module=inventory&method=get_product&sk1=DICOSECSK1oolshdsf33sadGGHsd376&debug=yes&device_id=33333333&data=1&filter1=${context.params.label}&lang=en&username=28&field_subcategory=151`
	);
	const data = await res.json();
	context.res.setHeader(
		'Cache-Control',
		'public, s-maxage=50, stale-while-revalidate=59'
	);
	if (data.data.res[0].field_category == 55) {
		return { props: { data, isLoading: false } };
	} else {
		context.res.writeHead(404);
		context.res.end();
	}
}
export default function HomePage({ data, isLoading }) {
	const [relatedData, relatedIsLoading] = useData(
		'https://orders.fore-site.net/media_admin/api/api_secure.php?module=inventory&method=category_products&sk1=DICOSECSK1oolshdsf33sadGGHsd376&debug=yes&device_id=33333333&data=1&filter1=55&lang=en&username=28&field_subcategory=151',
		'data'
	);
	const language = useSelector((state) => state.language);
	const uiData =
		language == 'arabic' ? componentData.arabic : componentData.english;

	const product = data.data.res[0];

	return (
		<div className=" mt-28">
			<Head>
				<title>Intex Jo | {product.field_item_name}</title>
				<meta
					name="keywords"
					content="مسابح جاهزه للبيع في الأردن, IntexJo, intex jo, intex, intex jordan, intex product, Swimming pools, above ground pools, outdoor pools, pools, air mattress, airbeds, inflatable spas, spas, purespa, portable spa, dura-beam airbeds, premaire airbeds, realtree airbeds, air furniture, inflatable furniture, pool floats, pool toys, inflatable boats, boats, hot tubs, برك سباحة intex , برك سباحة للاطفال , برك سباحة متنقلة , ,مسابح ,مسابح في الأردن , مسبح نفخ, نفخ , برك سباحة في الاردن , "
				></meta>
				<meta
					property="og:title"
					content={`Intex Jo | ${product.field_item_name}`}
				/>
				<meta property="og:type" content="product" />
				<meta
					property="og:url"
					content={`https://www.intexjo.com/Product/${product.label}`}
				/>
				<meta property="og:image" content={product.image} />
				<meta
					property="og:description"
					content={product.field_item_name}
				/>
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@intex-jo" />
				<meta
					name="twitter:title"
					content={`Intex Jo | ${product.field_item_name}`}
				/>
				<meta
					name="twitter:description"
					content={product.field_item_name}
				/>
				<meta name="twitter:image" content={product.image} />
				<link rel="icon" href="/icon.jpg" />
			</Head>
			<Header />

			<div className=" flex items-center">
				<div className="h-fit w-full">
					{product ? (
						<ProductDetails product={product} uiData={uiData} />
					) : (
						''
					)}
					<ProductsContainer
						title={uiData.relatedProducts}
						limit={3}
						number={product.field_subcategory}
						data={relatedData}
						isLoading={relatedIsLoading}
						currentProduct={product.nid}
						loadingAllowed={false}
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}
