import "../styles/globals.scss";
import type { AppProps } from "next/app";
import "../src/components/NavBar/NavBar";
import "../styles/RangeDatePicker.scss";
import NavBar from "../src/components/NavBar/NavBar";
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <NavBar />
            <Component {...pageProps} />
        </>
    );
}
export default MyApp;
