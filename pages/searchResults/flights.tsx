import { searchResultsT } from "../../src/components/SearchResults/types";
import { FlightsProvider } from "../../src/components/CommonContexts/FlightsContext";
import { SearchModal } from "../../src/components/Modal";
import ResultsPageContainer from "../../src/components/SearchResults/FlightsResultsOverlay";
type searchQueryT = {
  from?: string | string[];
  to?: string | string[];
  date?: string | string[];
  returnDate?: string | string[];
  adults?: string | string[];
  childs?: string | string[];
};
const SearchResults = (props: searchResultsT) => {
  return (
    // <FlightsProvider>
    <>
      <SearchModal />
      <ResultsPageContainer />
    </>
    // </FlightsProvider>
  );
};

export default SearchResults;
