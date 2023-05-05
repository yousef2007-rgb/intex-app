import React from 'react';
import Head from 'next/head';
export function HeadComponent({ product }) {
	return (
		<Head>
			<title>Intex Jo | {product.field_item_name}</title>
			<meta
				name="keywords"
				content="مسابح جاهزه للبيع في الأردن, IntexJo, intex jo, intex, intex jordan, intex product, Swimming pools, above ground pools, outdoor pools, pools, air mattress, airbeds, inflatable spas, spas, purespa, portable spa, dura-beam airbeds, premaire airbeds, realtree airbeds, air furniture, inflatable furniture, pool floats, pool toys, inflatable boats, boats, hot tubs, برك سباحة intex , برك سباحة للاطفال , برك سباحة متنقلة , ,مسابح ,مسابح في الأردن , مسبح نفخ, نفخ , برك سباحة في الاردن , "
			></meta>
			<meta
				property="og:title"
				content={`Intex Jo | ${product.field_item_name}`}
			/>
			<meta property="og:type" content="product" />
			<meta
				property="og:url"
				content={`https://www.intexjo.com/Product/${product.label}`}
			/>
			<meta property="og:image" content={product.image} />
			<meta property="og:description" content={product.field_item_name} />
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
