import { CarsSearchProvider } from "../../src/components/CommonContexts/CarsContext";
import { SearchModal } from "../../src/components/Modal";
import ResultsPageContainer from "../../src/components/SearchResults/CarsResultsOverlay";
const SearchResults = (props: any) => {
  return (
    <CarsSearchProvider>
      <SearchModal />
      <ResultsPageContainer />
    </CarsSearchProvider>
  );
};

export default SearchResults;
