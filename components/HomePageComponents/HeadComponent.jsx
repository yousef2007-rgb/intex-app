import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import data from '../../data/HomePage.json';

export function HeadComponent({}) {
	const { lang } = useRouter().query;
	const content = lang == 'arabic' ? data.Head.arabic : data.Head.english;
	return (
		<Head>
			<meta
				name="google-site-verification"
				content="tzwZyToxpHnxh4irkfCAsO21QDswX01YZttE_tHMob8"
			/>
			<title>{content.title}</title>
			<meta name="description" content={content.discription} />
			<meta name="robots" content="index, follow" />
			<meta name="author" content="IntexJo" />

			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			<meta name="keywords" content={content.keywords}></meta>
			<meta property="og:title" content={content.title} />
			<meta property="og:type" content="products" />
			<meta property="og:url" content={content.url} />
			<meta
				property="og:image"
				content="https://www.intexjo.com/Assets/images/www.intexjo.com.png"
			/>
			<meta property="og:description" content={content.discription} />
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:site" content="@intex-jo" />
			<meta name="twitter:title" content={content.title} />
			<meta name="twitter:description" content={content.discription} />
			<meta
				name="twitter:image"
				content="https://www.intexjo.com/Assets/images/www.intexjo.com.png"
			/>
			<link rel="icon" href="/icon.jpg" />
		</Head>
	);
}
