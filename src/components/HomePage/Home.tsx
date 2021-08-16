import SearchForm from "../SearchForm/SearchForm";
import arrow from "../../icons/right-arrow.svg";
import "./home.scss";
type homeProps = {
    children?: React.ReactNode;
    background?: string;
    className: string;
};
const Home = (props: homeProps) => {
    return (
        <main id="homepage">
            <div className="homepage">
                <div className="recommendation">
                    <h2>INDONESIA</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut in massa lacinia, aliquam massa non, euismod augue.
                        Lorem ipsum dolor sit amet,{" "}
                    </p>
                    <button className="exploreButton">
                        <span>Explore</span>
                        <img src={arrow} alt="Clickable arrow" />
                    </button>
                </div>
                <SearchForm />
            </div>
        </main>
    );
};
export default Home;
