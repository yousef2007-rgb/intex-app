import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Loading from '../Loading';

export default function ProductCard({
	label,
	discription,
	image,
	price,
	cagotary,
	nid,
	loadingAllowed,
}) {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => setIsLoading(false), []);
	return (
		<>
			<Loading visablilty={isLoading} />
			<Link
				onClick={() =>
					loadingAllowed ? setIsLoading(true) : setIsLoading(false)
				}
				href={`/Product/${nid}`}
				className=" z-0 flex w-full max-w-xs flex-col items-center justify-center p-5 text-center shadow-lg transition-all duration-300 hover:translate-y-[-20px] hover:shadow-2xl"
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
					className="aspect-square w-full object-cover"
					loading="lazy"
				/>
				<h1 className=" my-2 w-fit font-bold text-primary">
					{discription}
				</h1>
				<h2 className=" w-fit font-bold text-secondery">{label}</h2>
				<h3 className=" my-2 w-fit font-bold">{price * 1.5}JOD</h3>
			</Link>
		</>
	);
}
