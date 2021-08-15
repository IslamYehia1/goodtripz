import ReactDOM from "react-dom";
import Home from "./components/HomePage/Home";

const App = () => {
    return <Home className="homepage" />;
};

ReactDOM.render(<App />, document.getElementById("root"));
