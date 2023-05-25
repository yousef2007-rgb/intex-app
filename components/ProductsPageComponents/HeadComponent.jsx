import React from 'react';
import Head from 'next/head';
export function HeadComponent({ products }) {
	return (
		<Head>
			<title>
				Intex Jo | {products.title} Official Distributor for Intex In
				Jordan
			</title>
			<meta
				name="description"
				content={`${products.title} | Intexjo.com is a leading Jordanian provider of high-quality and affordable Intex products for your home and outdoor needs. With a wide range of Intex products including pools, airbeds, spas, furniture, and more, Intexjo.com is your one-stop-shop for all your home and outdoor needs in Jordan. Our commitment to quality and customer satisfaction makes us the top choice for customers looking for the best in home and outdoor products.`}
			/>
			<meta name="robots" content="index, follow" />
			<meta name="author" content="IntexJo" />

			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			<meta
				name="keywords"
				content="مسابح جاهزه للبيع في الأردن, IntexJo, intex jo, intex, intex jordan, intex product, Swimming pools, above ground pools, outdoor pools, pools, air mattress, airbeds, inflatable spas, spas, purespa, portable spa, dura-beam airbeds, premaire airbeds, realtree airbeds, air furniture, inflatable furniture, pool floats, pool toys, inflatable boats, boats, hot tubs, برك سباحة intex , برك سباحة للاطفال , برك سباحة متنقلة , ,مسابح ,مسابح في الأردن , مسبح نفخ, نفخ , برك سباحة في الاردن , "
			></meta>
			<meta
				property="og:title"
				content="Intex Jo | Official Distributor for Intex In Jordan"
			/>
			<meta property="og:type" content="products" />
			<meta property="og:url" content="https://www.intexjo.com/" />
			<meta
				property="og:image"
				content="https://www.intexjo.com/Assets/images/www.intexjo.com.png"
			/>
			<meta
				property="og:description"
				content="official distrubutor of intex in jordan that sells all kinds of pools ,pools equipment and accesories"
			/>
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:site" content="@intex-jo" />
			<meta
				name="twitter:title"
				content="Intex Jo | Official Distributor for Intex In Jordan"
			/>
			<meta
				name="twitter:description"
				content="official distrubutor of intex in jordan that sells all kinds of pools ,pools equipment and accesories"
			/>
			<meta
				name="twitter:image"
				content="https://www.intexjo.com/Assets/images/www.intexjo.com.png"
			/>
			<link rel="icon" href="/icon.jpg" />
		</Head>
	);
}
