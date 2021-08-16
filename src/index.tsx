import ReactDOM from "react-dom";
import Home from "./components/HomePage/Home";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
    return (
        <>
            <NavBar />
            <Home className="homepage" />
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
