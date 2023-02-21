import "../styles/globals.scss";
import { store } from "../store";
import { Provider } from "react-redux";
import { Analytics } from "@vercel/analytics/react";
import Loading from '../components/ui/Loading'
function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
			<Analytics />
			<Loading />
		</Provider>
	);
}

export default MyApp;
