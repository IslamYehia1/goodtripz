import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useState } from "react";
import "../src/components/NavBar/NavBar";
import "../styles/RangeDatePicker.scss";
import NavBar from "../src/components/NavBar/NavBar";
import { useRouter } from "next/router";
import UIProvider from "../src/components/UI";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  const [searchState, setSearchState] = useState("flights");
  const router = useRouter();

  return (
    <>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </>
  );
}
export default MyApp;
