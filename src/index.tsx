import ReactDOM from "react-dom";
import Button from "./components/button/Button"
import searchIcon from "./icons/search_white.svg" ; 

const App = () => {
    return(
        <Button icon = {searchIcon}>Search</Button>
    )
}

ReactDOM.render(<App /> , document.getElementById("root")) ; 