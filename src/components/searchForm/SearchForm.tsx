import "./searchForm.scss" ; 
import Button from "../button/Button";

const SearchForm = () => {
    return(
        <div id = "searchForm">
            <div className="searchTabs">
                <Button id = "active" className = "searchTab">Flights</Button>
                <Button className = "searchTab">Hotels</Button>
                <Button className = "searchTab">Cars</Button>
                <Button className = "searchTab">Packages</Button>
            </div>
            <div className="form">
                hi
            </div>
        </div>
    )
}

export default SearchForm ; 