import React from 'react';
import Head from 'next/head';
export function HeadComponent({ product }) {
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
		<Head>
			<title>
				Intex Jo | {product.field_item_name} {product.label}
			</title>
			<meta
				name="description"
				content={`${product.field_item_name} ${product.label} | Intexjo.com is a leading Jordanian provider of high-quality and affordable Intex products for your home and outdoor needs. With a wide range of Intex products including pools, airbeds, spas, furniture, and more, Intexjo.com is your one-stop-shop for all your home and outdoor needs in Jordan. Our commitment to quality and customer satisfaction makes us the top choice for customers looking for the best in home and outdoor products.`}
			/>
			<meta name="robots" content="index, follow" />
			<meta name="author" content="IntexJo" />
			<script type="application/ld+json">
				{JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'Product',
					name: product.field_item_name + product.label,
					description: product.field_item_name,
					brand: 'intex',
					image: product.image,
					offers: {
						'@type': 'Offer',
						price: price,
						priceCurrency: 'JOD',
						availability: 'in stock',
						seller: 'intexjo',
					},
					aggregateRating: 5,
				})}
			</script>

			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			<meta
				name="keywords"
				content={`intex, jordan, intex in jordan, مسبح,${product.field_item_name} ${product.label}`}
			/>
			<meta
				property="og:title"
				content={`Intex Jo | ${product.field_item_name} ${product.label}`}
			/>
			<meta property="og:type" content="product" />
			<meta
				property="og:url"
				content={`https://www.intexjo.com/Product/${product.nid}`}
			/>
			<meta property="og:image" content={product.image} />
			<meta
				property="og:description"
				content={product.field_item_name + product.label}
			/>
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:site" content="@intex-jo" />
			<meta
				name="twitter:title"
				content={`Intex Jo | ${product.field_item_name}`}
			/>
			<meta
				name="twitter:description"
				content={product.field_item_name}
			/>
			<meta name="twitter:image" content={product.image} />
			<link rel="icon" href="/icon.jpg" />
		</Head>
	);
}
