import { SearchModal } from "../../src/components/Modal";
import ResultsPageContainer from "../../src/components/SearchResults/CarsResults";
const SearchResults = (props: any) => {
  return (
    <>
      <SearchModal />
      <ResultsPageContainer />
    </>
  );
};

export default SearchResults;
