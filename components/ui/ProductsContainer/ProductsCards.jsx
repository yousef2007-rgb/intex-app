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
		<div className="flex w-full flex-1 flex-wrap items-center justify-evenly gap-8  text-center">
			{data.data.res
				.filter(
					(x) =>
						x.status == 1 &&
						x.field_subcategory == number &&
						x.nid != currentProduct
				)

				.sort((a, b) => {
					if (sortByValue == 'high-low') {
						return (
							(b.field_special_price
								? b.field_special_price
								: !b.field_online_price
								? b.field_wholesale_price * 1.5
								: b.field_online_price) -
							(a.field_special_price
								? a.field_special_price
								: !a.field_online_price
								? a.field_wholesale_price * 1.5
								: a.field_online_price)
						);
					} else {
						return (
							(a.field_special_price
								? a.field_special_price
								: !a.field_online_price
								? a.field_wholesale_price * 1.5
								: a.field_online_price) -
							(b.field_special_price
								? b.field_special_price
								: !b.field_online_price
								? b.field_wholesale_price * 1.5
								: b.field_online_price)
						);
					}
				})
				.filter((x) =>
					sortByValue == 'related'
						? (x.field_special_price
								? x.field_special_price
								: !x.field_online_price
								? x.field_wholesale_price * 1.5
								: x.field_online_price) >= 6
						: true
				)
				.filter((_, index) => index < limit || limit == 0)
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
