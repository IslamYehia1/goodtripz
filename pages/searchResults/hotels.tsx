import useIsMobile from "../../src/utils/useIsMobile";
import { useRouter } from "next/router";
import { useState, useReducer, useEffect } from "react";
import reducer from "../../src/components/SearchResults/hotelsReducer";
import { HotelSearchProvider } from "../../src/components/CommonContexts/HotelsContext";
import { SearchModal } from "../../src/components/Modal";
import HotelsResultsOverlay from "../../src/components/SearchResults/HotelsResultsOverlay";
const Hotels = () => {
  const router = useRouter();
  const query = router.query;
  const initial = {
    place: "",
    checkIn: "",
    checkOut: "",
    adults: "1",
    rooms: "1",
  };

  const [searchTerms, dispatch] = useReducer(reducer, initial);
  useEffect(() => {
    if (!router.isReady) return;
    dispatch({ type: "pullFromUrl", query: query });
  }, [router.isReady]);
  return (
    <HotelSearchProvider>
      <SearchModal />
      <HotelsResultsOverlay />
    </HotelSearchProvider>
  );
};

export default Hotels;
