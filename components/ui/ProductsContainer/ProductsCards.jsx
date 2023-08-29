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
	const price = (product) => {
		return {
			specialPrice: product.field_special_price,
			listPrice: product.field_online_price
				? product.field_online_price
				: product.field_wholesale_price * 1.5,
		};
	};
	return (
		<div className="flex w-full flex-1 flex-wrap items-center justify-evenly  text-center">
			{data.data.res
				.sort((a, b) => sortingFunction(a, b, sortByValue))
				.filter((item) =>
					mainFilteringFunction(item, number, currentProduct)
				)
				.filter((item) =>
					relatedProductsFilteringFunction(item, sortByValue)
				)
				.filter((_, index) => limitsFilteringFunction(index, limit))
				.map((product, index) => (
					<ProductCard
						key={index}
						label={product.label}
						discription={product.field_item_name}
						image={product.image}
						secondImage={product.images[0]}
						price={price(product)}
						nid={product.nid}
						loadingAllowed={loadingAllowed}
					/>
				))}
		</div>
	);
}
const mainFilteringFunction = (x, number, currentProduct) =>
	x.status == 1 && x.field_subcategory == number && x.nid != currentProduct;

const sortingFunction = (a, b, sortByValue) => {
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
};
const relatedProductsFilteringFunction = (item, sortByValue) =>
	sortByValue == 'related'
		? (item.field_special_price
				? item.field_special_price
				: !item.field_online_price
				? item.field_wholesale_price * 1.5
				: item.field_online_price) >= 6
		: true;

const limitsFilteringFunction = (index, limit) => index < limit || limit == 0;
