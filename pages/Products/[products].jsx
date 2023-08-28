//NextJs Hooks
import { useRouter } from 'next/router';

//Components with default export
import Header from '../../components/ui/Header';
import ProductsContainer from '../../components/ui/ProductsContainer/ProductsContainer';
import Footer from '../../components/ui/Footer/Footer';
import WhatsappButton from '../../components/ui/WhatsappButton';

//Components without default export
import { HeadComponent } from '../../components/ProductsPageComponents/HeadComponent';
import { useState } from 'react';

import content from '../../data/content.json';

//SSR Fetching Function
export async function getServerSideProps(context) {
	const res = await fetch(
		`https://orders.fore-site.net/media_admin/api/api_secure.php?module=inventory&method=subcategory_products&sk1=DICOSECSK1oolshdsf33sadGGHsd376&debug=yes&device_id=33333333&data=1&filter1=${
			context.params.products
		}&lang=${context.query.lang == 'arabic' ? 'ar' : 'en'}&username=28`
	);

	const data = await res.json();
	context.res.setHeader(
		'Cache-Control',
		'public, s-maxage=50, stale-while-revalidate=59'
	);
	return { props: { data, isLoading: false } };
	if (data.data.res[0].field_category == 55) {
	} else {
		context.res.writeHead(404);
		context.res.end();
	}
}

export default function HomePage({ isLoading, data }) {
	const router = useRouter();
	const products = router.query;
	const [sortByValue, setSortByValue] = useState('low-high');
	const { lang } = useRouter().query;
	const title =
		lang == 'arabic'
			? content.ar.ProductContainerBody.find(
					(x) => x.number == products.products
			  ).title
			: content.en.ProductContainerBody.find(
					(x) => x.number == products.products
			  ).title;
	return (
		<>
			<HeadComponent products={products} />
			<Header />
			<main className="mx-auto   flex h-fit min-h-screen max-w-7xl flex-col tablet:mt-32">
				<ProductsContainer
					number={products.products}
					limit={0}
					title={title}
					data={data}
					isLoading={isLoading}
					loadingAllowed={true}
					sortByValue={sortByValue}
				/>
			</main>
			<Footer />
			<WhatsappButton />
		</>
	);
}
