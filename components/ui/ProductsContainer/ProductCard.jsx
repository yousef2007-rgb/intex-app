import React from 'react';
import Link from 'next/link';

export default function ProductCard({
	label,
	discription,
	image,
	price,
	cagotary,
	nid,
	loadingAllowed,
}) {
	return (
		<>
			<Link
				href={`/Product/${nid}`}
				className="z-0 mx-1 flex w-full max-w-xs flex-col items-center justify-center rounded-xl text-center shadow-lg transition-all duration-300 hover:translate-y-[-20px] hover:shadow-2xl"
				itemScope
				itemType="https://schema.org/Product"
			>
				<meta itemProp="image" content={image} />
				<meta itemProp="name" content={discription} />
				<meta itemProp="discription" content={discription} />
				<meta itemProp="price" content={price * 1.5} />
				<meta itemProp="priceCurrency" content="JOD" />
				<meta
					itemProp="availability"
					content="https://schema.org/InStock"
				/>
				<div
					itemProp="reviewRating"
					itemType="https://schema.org/Rating"
					itemScope
				>
					<meta itemProp="ratingValue" content="5" />
					<meta itemProp="bestRating" content="5" />
				</div>
				<div
					itemProp="author"
					itemType="https://schema.org/Person"
					itemScope
				>
					<meta itemProp="name" content="Riad Aburadi" />
				</div>
				<div
					itemProp="brand"
					itemType="https://schema.org/Brand"
					itemscope
				>
					<meta itemProp="name" content="ACME" />
				</div>
				<img
					src={image}
					alt={discription + label}
					className="aspect-square h-52 w-full rounded-xl object-contain"
					loading="lazy"
				/>
				<div className="flex flex-col items-center justify-center p-5  text-center">
					<h1 className=" text-whi my-2 w-fit whitespace-pre-line font-bold text-primary">
						{discription}
					</h1>
					<h2 className=" w-fit font-bold text-secondery">{label}</h2>
					<h3 className=" my-2 w-fit font-bold">{price * 1.5}JOD</h3>
				</div>
			</Link>
		</>
	);
}
