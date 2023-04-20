import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../../components/ui/Header';
import ProductsContainer from '../../components/ui/ProductsContainer/ProductsContainer';
import useData from '../../hooks/useData';
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
	const content = useSelector((state) => state.language);

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

			<main className=" mx-auto flex max-w-7xl items-center">
				<div className="h-fit w-full">
					<div className=" mx-auto flex w-full max-w-6xl flex-wrap items-center justify-evenly border-b">
						<Slider product={product} />

						<article className="h-fit w-full p-5 font-bold tablet:ml-4 tablet:w-1/2">
							<div>
								<h1
									itemProp="discription"
									className=" my-2 text-3xl text-blue_gray"
								>
									{product.field_item_name}
								</h1>
								<h2
									className="  w-full font-normal capitalize"
									itemProp="item id"
								>
									{content.ProductPage.itemNumber}:{' '}
									{product.label}
								</h2>
								<div
									className=" my-2 list-disc border-b px-3 pb-10 [&>*]:list-disc"
									dangerouslySetInnerHTML={{
										__html: product.field_details,
									}}
								></div>
							</div>
							<div className=" flex w-full flex-col">
								<p
									itemProp="price"
									className=" my-2 ml-auto text-2xl capitalize"
								>
									<span className="text-2xl font-bold text-red-500">
										{product.field_special_price
											? '-' +
											  parseInt(
													100 -
														(product.field_special_price /
															(product.field_online_price
																? product.field_online_price
																: product.field_wholesale_price *
																  1.5)) *
															100
											  ) +
											  '%'
											: ''}
									</span>{' '}
									{product.field_special_price
										? product.field_special_price + 'JOD'
										: (product.field_online_price
												? product.field_online_price
												: product.field_wholesale_price *
												  1.5) + 'JOD'}
								</p>
								<div className=" mb-2 ml-auto flex text-lg capitalize opacity-50">
									{product.field_special_price ? (
										<>
											<span>List Price: </span>
											<p
												itemProp="price"
												style={{
													textDecoration:
														'line-through',
												}}
											>
												{product.field_online_price
													? product.field_online_price +
													  'JOD'
													: product.field_wholesale_price *
															1.5 +
													  'JOD'}
											</p>
										</>
									) : (
										''
									)}
								</div>
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
														price: product.field_special_price
															? product.field_special_price
															: product.field_online_price
															? product.field_online_price
															: product.field_wholesale_price *
															  1.5,
														nid: product.nid,
													},
													quantity: counter,
													replace: false,
												})
											);
										} else {
											alert('Set A Quantity Please!');
										}
									}}
									className=" my-5 ml-auto w-full rounded-xl border-2 border-transparent bg-secondery px-20 py-2 font-bold uppercase text-white hover:border-secondery hover:bg-white hover:text-secondery tablet:w-fit"
								>
									{content.ProductPage.addToCartButton}
								</button>
							</div>
						</article>
					</div>
					<ProductsContainer
						title={content.ProductPage.relatedProducts}
						limit={3}
						number={product.field_subcategory}
						data={relatedData}
						isLoading={relatedIsLoading}
						currentProduct={product.nid}
						loadingAllowed={false}
					/>
				</div>
			</main>
			<Footer />
		</div>
	);
}

const Slider = ({ product }) => {
	const slides = [product.image, ...product.images];
	const [activeSlide, setActiveSlide] = useState(0);

	const handlePrev = () => {
		setActiveSlide(activeSlide === 0 ? slides.length - 1 : activeSlide - 1);
	};

	const handleNext = () => {
		setActiveSlide(activeSlide === slides.length - 1 ? 0 : activeSlide + 1);
	};

	const handleSlideButtonClick = (index) => {
		setActiveSlide(index);
	};

	return (
		<div className="w-full max-w-lg">
			<div className="relative h-96 w-full max-w-lg">
				{slides.map((slide, index) => (
					<div
						key={index + 1}
						className={`absolute top-0 left-0 h-full w-full opacity-0 transition-opacity duration-500 ease-in-out`}
						style={{
							opacity: index === activeSlide ? 1 : 0,
						}}
					>
						<img
							src={slide}
							alt={`Slide ${slide.id}`}
							className="h-full w-full rounded-xl object-contain"
						/>
					</div>
				))}
				{/* <button
					className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full border-secondery bg-white bg-opacity-50 p-4 backdrop-blur-lg hover:bg-secondery hover:text-white"
					onClick={handlePrev}
				>
					&lt;
				</button>
				<button
					className="hover:text-whitebackdrop-blur-lg  absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full border-secondery bg-white bg-opacity-50 p-4 backdrop-blur-lg transition-all hover:bg-secondery hover:text-white "
					onClick={handleNext}
				>
					&gt;
				</button> */}
			</div>
			<div className="my-4 flex flex-wrap justify-evenly">
				{slides.map((slide, index) => (
					<button
						className="m-1"
						key={index}
						onMouseEnter={() => handleSlideButtonClick(index)}
					>
						<img
							className="h-20 w-20 rounded-xl border-2  object-contain"
							style={{
								borderColor:
									index === activeSlide ? 'black' : 'silver',
							}}
							src={slide}
							alt={`Thumbnail ${slide.id}`}
						/>
					</button>
				))}
			</div>
		</div>
	);
};
