import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import ProductMetaData from './ProductMetaData';

export default function ProductCard({
	label,
	discription,
	image,
	secondImage,
	price,
	nid,
	packingDiscription,
}) {
	const [hover, setHover] = useState(false);
	const { lang } = useRouter().query;

	return (
		<Link
			href={`/Product/${nid}?lang=${
				lang == 'arabic' ? 'arabic' : 'english'
			}`}
			className="relative z-0 mx-2 my-4 flex min-h-[450px] w-full max-w-[160px] flex-col items-center justify-center rounded-lg bg-white text-center shadow-lg transition-all duration-300 hover:translate-y-[-20px] hover:shadow-2xl mobile:my-6 mobile:min-h-[400px] mobile:max-w-[280px] "
			itemScope
			itemType="https://schema.org/Product"
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<ProductMetaData
				discription={discription}
				label={label}
				price={price}
			/>
			<img
				src={secondImage ? (hover ? secondImage : image) : image}
				alt={discription + label}
				className="aspect-square h-52 w-full rounded-xl object-contain transition-all"
				loading="lazy"
				itemProp="image"
			/>
			<article className="flex flex-col items-center justify-center p-5  text-center">
				<p className=" text-whi my-2 w-fit whitespace-pre-line font-bold text-primary">
					{discription}
				</p>
				<p className=" w-fit font-bold text-secondery">{label}</p>

				{
				packingDiscription === 'out-of-stock'?
				<div className="flex w-full">
						<span className="mt-5 w-full rounded-lg border-2  py-2 text-center  capitalize text-gray-300">
							out of stock
						</span>
					</div>
				
				:
				
				
				packingDiscription != 'comming-soon' ? (
					<>
						<p className=" my-2 w-fit font-bold">
							{price.specialPrice
								? price.specialPrice + 'JOD'
								: price.listPrice + 'JOD'}
						</p>
						<p className="text-sm font-bold text-gray-500 line-through">
							{price.specialPrice ? price.listPrice + 'JOD' : ''}
						</p>
					</>
				) : (
					<div className="flex w-full">
						<span className="mt-5 w-full rounded-lg border-2 border-green-400 bg-green-400 py-2 text-center  capitalize text-white">
							comming soon
						</span>
					</div>
				)}
			</article>
		</Link>
	);
}
