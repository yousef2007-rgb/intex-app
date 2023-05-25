import React from 'react';
export default function MetaTags({ product }) {
	const price = product.field_special_price
		? product.field_special_price
		: product.field_online_price
		? product.field_online_price
		: product.field_wholesale_price * 1.5;
	const listPrice = product.field_online_price
		? product.field_online_price
		: product.field_wholesale_price * 1.5;
	const discount = Math.round(
		100 -
			(product.field_special_price /
				(product.field_online_price
					? product.field_online_price
					: product.field_wholesale_price * 1.5)) *
				100
	);
	return (
		<>
			<div
				itemProp="brand"
				itemType="https://schema.org/Brand"
				itemScope=""
			>
				<meta itemProp="name" content="intex" />
			</div>
			<meta
				itemProp="name"
				content={product.field_item_name + product.label}
			></meta>
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
				<meta itemProp="price" content={price} />
				<link
					itemProp="availability"
					href="https://schema.org/InStock"
				/>
			</div>
			<meta
				itemprop="description"
				content={product.field_item_name + product.label}
			/>
			<meta name="rating" content="4.5" />
			<meta name="reviewCount" content="10" />
		</>
	);
}
