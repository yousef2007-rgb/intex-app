import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

export default function ProductCard({
	label,
	discription,
	image,
	secondImage,
	price,
	nid,
}) {
	const [hover, setHover] = useState(false);
	return (
		<Link
			href={`/Product/${nid}`}
			className="z-0 mx-1 flex w-full max-w-xs flex-col items-center justify-center rounded-xl text-center shadow-lg transition-all duration-300 hover:translate-y-[-20px] hover:shadow-2xl"
			itemScope
			itemType="https://schema.org/Product"
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<img
				src={secondImage ? (hover ? secondImage : image) : image}
				alt={discription + label}
				className="aspect-square h-52 w-full rounded-xl object-contain transition-all"
				loading="lazy"
			/>
			<div className="flex flex-col items-center justify-center p-5  text-center">
				<h1 className=" text-whi my-2 w-fit whitespace-pre-line font-bold text-primary">
					{discription}
				</h1>
				<h2 className=" w-fit font-bold text-secondery">{label}</h2>
				<h3 className=" my-2 w-fit font-bold">
					{price.specialPrice
						? price.specialPrice + 'JOD'
						: price.listPrice + 'JOD'}
				</h3>
				<h4 className="text-sm font-bold text-gray-500 line-through">
					{price.specialPrice ? price.listPrice + 'JOD' : ''}
				</h4>
			</div>
		</Link>
	);
}
