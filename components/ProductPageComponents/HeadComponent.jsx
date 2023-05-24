import React from 'react';
import Head from 'next/head';
export function HeadComponent({ product }) {
	console.log(product);
	return (
		<Head>
			<title>Intex Jo | {product.field_item_name}</title>
			<meta
				name="keywords"
				content={`intex, jordan, intex in jordan, مسبح,${product.field_item_name}`}
			></meta>
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
