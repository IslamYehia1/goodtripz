import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useState } from "react";
import "../src/components/NavBar/NavBar";
import "../styles/RangeDatePicker.scss";
import NavBar from "../src/components/NavBar/NavBar";
function MyApp({ Component, pageProps }: AppProps) {
    const [searchState, steSearchState] = useState("flights");
    return (
        <>
            <NavBar />
            <Component
                setSearchState={(newState: string) => {
                    steSearchState(newState);
                }}
                searchState={searchState}
                {...pageProps}
            />
        </>
    );
}
export default MyApp;
