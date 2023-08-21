//React Hooks
import { useState } from 'react';

//Custom Hooks
import useFetch from '../../hooks/useFetch';

//Redux Toolkit Hooks
import { useSelector } from 'react-redux';

//Components with default export
import Header from '../../components/ui/Header';
import ProductsContainer from '../../components/ui/ProductsContainer/ProductsContainer';
import Footer from '../../components/ui/Footer/Footer';
import WhatsappButton from '../../components/ui/WhatsappButton';

//Components without default export
import { Article } from '../../components/ProductPageComponents/Article';
import { ImageSlider } from '../../components/ProductPageComponents/ImageSlider';
import { HeadComponent } from '../../components/ProductPageComponents/HeadComponent';
import MetaTags from '../../components/ProductPageComponents/MetaTags';
import { useRouter } from 'next/router';

//SSR Fetching Function
export async function getServerSideProps(context) {
	const res = await fetch(
		`https://orders.fore-site.net/media_admin/api/api_secure.php?module=inventory&method=get_product&sk1=DICOSECSK1oolshdsf33sadGGHsd376&debug=yes&device_id=33333333&data=1&filter1=${
			context.params.label
		}&lang=${
			context.query.lang == 'arabic' ? 'ar' : 'en'
		}&username=28&field_subcategory=151`
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
		return {};
	}
}

//Main Component
export default function HomePage({ data }) {
	const linkUrl =
		useRouter().query.lang == 'arabic'
			? process.env.NEXT_PUBLIC_URL_AR
			: process.env.NEXT_PUBLIC_URL;
	//Component Data
	const [relatedData, relatedIsLoading] = useFetch(linkUrl, 'data');
	const product = data.data.res[0];
	const content = useSelector((state) => state.language);

	return (
		<div className=" ">
			<HeadComponent product={product} />
			<main
				className=" mx-auto  flex max-w-7xl items-center tablet:mt-36"
				itemType="https://schema.org/Product"
				itemScope
			>
				<MetaTags product={product} />
				<div className="h-fit w-full">
					<div className=" mx-auto flex w-full max-w-6xl flex-wrap items-center justify-evenly border-b">
						<ImageSlider product={product} />
						<Article content={content} product={product} />
					</div>
					<ProductsContainer
						title={content.ProductPage.similarProducts}
						limit={3}
						number={product.field_subcategory}
						data={relatedData}
						isLoading={relatedIsLoading}
						currentProduct={product.nid}
						loadingAllowed={false}
					/>
					{product.field_subcategory == 342 ? (
						<ProductsContainer
							title={content.ProductPage.relatedProducts}
							limit={3}
							number={345}
							data={relatedData}
							isLoading={relatedIsLoading}
							currentProduct={product.nid}
							loadingAllowed={false}
							sortByValue="related"
						/>
					) : (
						''
					)}
					{product.field_subcategory == 2693 ||
					product.field_subcategory == 1515 ||
					product.field_subcategory == 1514 ||
					product.field_subcategory == 1944 ||
					product.field_subcategory == 343 ? (
						<ProductsContainer
							title={content.ProductPage.relatedProducts}
							limit={3}
							number={346}
							data={relatedData}
							isLoading={relatedIsLoading}
							currentProduct={product.nid}
							loadingAllowed={false}
							sortByValue="related"
						/>
					) : (
						''
					)}
				</div>
			</main>
			<Header />
			<Footer />
			<WhatsappButton nid={product.nid} />
		</div>
	);
}
