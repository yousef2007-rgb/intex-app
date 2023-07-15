import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function ProductCard({
	label,
	discription,
	image,
	secondImage,
	price,
	nid,
}) {
	const [hover, setHover] = useState(false);

	const { lang } = useRouter().query;
	return (
		<Link
			href={`/Product/${nid}?lang=${
				lang == 'arabic' ? 'arabic' : 'english'
			}`}
			className="relative z-0 mx-1 flex w-full max-w-xs flex-col items-center justify-center rounded-xl text-center shadow-lg transition-all duration-300 hover:translate-y-[-20px] hover:shadow-2xl"
			itemScope
			itemType="https://schema.org/Product"
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<meta itemprop="description" content={discription + label} />
			<meta name="rating" content="4.5" />
			<meta name="reviewCount" content="10" />
			<div
				itemProp="brand"
				itemType="https://schema.org/Brand"
				itemScope=""
			></div>
			<meta itemProp="name" content={discription + label}></meta>
			<div
				itemProp="offers"
				itemtype="https://schema.org/Offer"
				itemscope=""
			>
				<meta
					itemProp="itemCondition"
					content="https://schema.org/NewCondition"
				/>
				<meta itemProp="priceCurrency" content="JOD" />
				<meta
					itemProp="price"
					content={
						price.specialPrice
							? price.specialPrice
							: price.listPrice
					}
				/>
				<link
					itemProp="availability"
					href="https://schema.org/InStock"
				/>
			</div>
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
				<p className=" my-2 w-fit font-bold">
					{price.specialPrice
						? price.specialPrice + 'JOD'
						: price.listPrice + 'JOD'}
				</p>
				<p className="text-sm font-bold text-gray-500 line-through">
					{price.specialPrice ? price.listPrice + 'JOD' : ''}
				</p>
			</article>
		</Link>
	);
}
