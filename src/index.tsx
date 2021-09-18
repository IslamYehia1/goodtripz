import ReactDOM from "react-dom";
import Home from "./pages/HomePage/Home";
import FlightSearch from "./pages/FlightSearch/FlightSearch";
import NavBar from "./components/NavBar/NavBar";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
            <NavBar />
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home className="homepage" />
                    </Route>
                    <Route exact path="/flightSearch">
                        <FlightSearch className="FlightSearch" />
                    </Route>
                </Switch>
            </Router>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
