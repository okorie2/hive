import "../styles/globals.css";
import store from '../redux/store/store'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <ToastContainer />
    </Provider>
  );
}

export default MyApp;
