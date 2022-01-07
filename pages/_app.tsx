import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useState } from "react";
import "../src/components/NavBar/NavBar";
import "../styles/RangeDatePicker.scss";
import NavBar from "../src/components/NavBar/NavBar";
import { useRouter } from "next/router";
import UIProvider from "../src/components/UI";
function MyApp({ Component, pageProps }: AppProps) {
  const [searchState, setSearchState] = useState("flights");
  const router = useRouter();
  return (
    <>
      <UIProvider>
        <NavBar />
        <Component
          setSearchState={(newState: string) => {
            setSearchState(newState);
          }}
          searchState={searchState}
          {...pageProps}
        />
      </UIProvider>
    </>
  );
}
export default MyApp;
