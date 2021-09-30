import ReactDOM from "react-dom";
import Home from "./pages/HomePage/Home";
import SearchResults from "./pages/SearchResults";
import NavBar from "./components/NavBar/NavBar";
import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
    useEffect(() => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
        window.addEventListener("resize", () => {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        });
    }, []);
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path="/">
                        <Home className="homepage" />
                    </Route>
                    <Route path="/SearchResults/:type">
                        <SearchResults className="flightSearch" />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
