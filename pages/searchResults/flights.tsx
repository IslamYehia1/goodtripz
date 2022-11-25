import { searchResultsT } from "../../src/components/SearchResults/types";
import { SearchModal } from "../../src/components/Modal";
import ResultsPageContainer from "../../src/components/SearchResults/FlightsResults";
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
    <>
      <SearchModal />
      <ResultsPageContainer />
    </>
  );
};

export default SearchResults;
