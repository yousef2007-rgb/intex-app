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

	return (
		<>
			<HeadComponent products={products} />
			<Header />
			<main className="mx-auto  flex h-fit min-h-screen max-w-7xl flex-col tablet:mt-0">
				<div className="mt-20 ml-auto flex items-center px-5 font-bold capitalize tablet:mt-32">
					<label className="my-5" htmlFor="storBySelect">
						sort by price:
					</label>
					<select
						className="my-5 h-fit border"
						name="sortBy"
						id="storBySelect"
						onChange={(e) => setSortByValue(e.target.value)}
					>
						<option value="low-high">low - high</option>
						<option value="high-low">high - low</option>
					</select>
				</div>
				<ProductsContainer
					number={products.products}
					limit={0}
					title={products.title}
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
