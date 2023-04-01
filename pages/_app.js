import "../styles/globals.scss";
import { store } from "../store";
import { Provider } from "react-redux";
import { Analytics } from "@vercel/analytics/react";
import Loading from '../components/ui/Loading'
import Script from "next/script";
function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

			<Script strategy="lazyOnload">
				{`
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
		page_path: window.location.pathname,
		});
	`}
			</Script>
			<Component {...pageProps} />
			<Analytics />
			<Loading />
		</Provider>
	);
}

export default MyApp;
