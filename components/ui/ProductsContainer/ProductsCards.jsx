import React from 'react';
import ProductCard from './ProductCard';
export function ProductsCards({
	data,
	loadingAllowed,
	number,
	currentProduct,
	limit,
	sortByValue,
}) {
	return (
		<div className="flex w-full flex-1 flex-wrap items-center justify-evenly gap-8 py-5 text-center">
			{data.data.res
				.filter(
					(x) =>
						x.status == 1 &&
						x.field_subcategory == number &&
						x.nid != currentProduct
				)
				.filter((_, index) => index < limit || limit == 0)
				.sort((a, b) => {
					if (sortByValue == 'high-low') {
						return (
							b.field_wholesale_price - a.field_wholesale_price
						);
					} else {
						return (
							a.field_wholesale_price - b.field_wholesale_price
						);
					}
				})
				.map((product, index) => (
					<ProductCard
						key={index}
						label={product.label}
						discription={product.field_item_name}
						image={product.image}
						secondImage={product.images[0]}
						price={{
							specialPrice: product.field_special_price,
							listPrice: product.field_online_price
								? product.field_online_price
								: product.field_wholesale_price * 1.5,
						}}
						nid={product.nid}
						loadingAllowed={loadingAllowed}
					/>
				))}
		</div>
	);
}
