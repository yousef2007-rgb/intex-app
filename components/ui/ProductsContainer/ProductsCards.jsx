import React from 'react';
import ProductCard from './ProductCard';
export function ProductsCards({
	data,
	loadingAllowed,
	number,
	currentProduct,
	limit,
}) {
	return (
		<div className="flex w-full flex-1 flex-wrap items-center justify-evenly gap-8 text-center">
			{data.data.res
				.filter(
					(x) =>
						x.status == 1 &&
						x.field_subcategory == number &&
						x.nid != currentProduct
				)
				.filter((_, index) => index < limit || limit == 0)
				.map((product, index) => (
					// <ProductCard
					// 	key={index}
					// 	label={product.label}
					// 	discription={product.field_item_name}
					// 	image={product.image}
					// 	price={product.field_wholesale_price}
					// 	nid={product.nid}
					// 	loadingAllowed={loadingAllowed}
					// />
					<h1>Hello World</h1>
				))}
		</div>
	);
}
