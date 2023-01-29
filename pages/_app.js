import "../styles/globals.scss";
import { store } from "../store";
import { Provider } from "react-redux";
import { Analytics } from "@vercel/analytics/react";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Analytics />
    </Provider>
  );
}

export default MyApp;
