import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../../components/ui/Header';
import ProductsContainer from '../../components/ui/ProductsContainer/ProductsContainer';
import useData from '../../Hooks/useData';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../../slices/cartSlice';
import componentData from '../../data/ProductPage.json';
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
		process.env.NEXT_PUBLIC_URL,
		'data'
	);
	const dispatch = useDispatch();
	const language = useSelector((state) => state.language);
	const uiData =
		language == 'arabic' ? componentData.arabic : componentData.english;

	const [counter, setCounter] = useState(1);
	const product = data.data.res[0];

	return (
		<div className=" mt-20">
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
					<div className=" mx-auto flex w-full max-w-6xl flex-wrap items-center justify-evenly border-b">
						<img
							className="aspect-square h-fit w-full max-w-lg rounded-xl object-contain tablet:w-1/2 tablet:min-w-[400px]"
							src={product.image}
							itemProp="product image"
						/>

						<article className="h-fit w-full p-5 font-bold tablet:ml-4 tablet:w-1/2">
							<div>
								<h1
									itemProp="discription"
									className=" my-2 text-3xl text-blue_gray"
								>
									{product.field_item_name}
								</h1>
								<h2
									className="  w-full border-b pb-10 font-normal capitalize"
									itemProp="item id"
								>
									{uiData.itemNumber}: {product.label}
								</h2>
							</div>
							<div className=" flex w-full flex-col">
								<p
									itemProp="price"
									className=" my-5 ml-auto text-2xl capitalize"
								>
									{product.field_wholesale_price * 1.5} JOD
								</p>

								<div className=" mx-auto flex w-full rounded-xl text-center shadow-md tablet:mr-0 tablet:w-fit">
									<button
										onClick={() => {
											if (counter > 0) {
												setCounter(counter - 1);
											}
										}}
										className=" rounded-l-xl bg-slate-800 p-2 px-3 font-bold text-white"
									>
										-
									</button>
									<p className=" flex-1 py-2 tablet:px-24">
										{counter}
									</p>

									<button
										onClick={() => setCounter(counter + 1)}
										className=" rounded-r-xl bg-slate-800 py-2 px-3 font-bold text-white"
									>
										+
									</button>
								</div>
								<button
									onClick={() => {
										if (counter != 0) {
											dispatch(
												addCartItem({
													item: {
														image: product.image,
														discription:
															product.field_item_name,
														label: product.label,
														price:
															product.field_wholesale_price *
															1.5,
														nid: product.nid,
													},
													quantity: counter,
												})
											);
										} else {
											alert('Set A Quantity Please!');
										}
									}}
									className=" my-5 ml-auto w-full rounded-xl border-2 border-transparent bg-secondery px-20 py-2 font-bold uppercase text-white hover:border-secondery hover:bg-white hover:text-secondery tablet:w-fit"
								>
									{uiData.addToCartButton}
								</button>
							</div>
						</article>
					</div>
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
