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
		<div className="flex flex-wrap items-center justify-center gap-8 text-center ">
			{data &&
				data.data.res
					.filter((x) => x.field_subcategory == number)
					.filter((x) => x.nid != currentProduct)
					.filter((_x, index) => index < limit || limit == 0)
					.map((product, index) => (
						<ProductCard
							key={index}
							label={product.label}
							discription={product.field_item_name}
							image={product.image}
							price={product.field_wholesale_price}
							nid={product.nid}
							loadingAllowed={loadingAllowed}
						/>
					))}
		</div>
	);
}
