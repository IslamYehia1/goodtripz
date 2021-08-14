import ReactDOM from "react-dom";
import SearchForm from "./components/searchForm/SearchForm";
import Home from "./components/homePage/Home";

const App = () => {
    return (
        <Home>
            <SearchForm />
        </Home>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
