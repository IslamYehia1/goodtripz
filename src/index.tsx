import ReactDOM from "react-dom";
import Home from "./components/HomePage/Home";
import NavBar from "./components/NavBar/NavBar";
import { useEffect } from "react";

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
            <Home className="homepage" />
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
