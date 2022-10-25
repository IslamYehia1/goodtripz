import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import "../src/components/NavBar/NavBar";
import "../styles/RangeDatePicker.scss";
import NavBar from "../src/components/NavBar/NavBar";
import { useRouter } from "next/router";
import UIProvider from "../src/components/UI";
import { FlightsProvider } from "../src/components/CommonContexts/FlightsContext";
import { HotelSearchProvider } from "../src/components/CommonContexts/HotelsContext";
import { CarsSearchProvider } from "../src/components/CommonContexts/CarsContext";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  const [searchState, setSearchState] = useState("flights");
  const router = useRouter();
  useEffect(() => {
    document.title = "Goodtripz";
  }, []);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UIProvider>
          <FlightsProvider>
            <HotelSearchProvider>
              <CarsSearchProvider>
                <NavBar />
                <Component
                  setSearchState={(newState: string) => {
                    setSearchState(newState);
                  }}
                  searchState={searchState}
                  {...pageProps}
                />
              </CarsSearchProvider>
            </HotelSearchProvider>
          </FlightsProvider>
        </UIProvider>
      </QueryClientProvider>
    </>
  );
}
export default MyApp;
