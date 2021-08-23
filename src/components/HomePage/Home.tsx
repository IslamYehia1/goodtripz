import SearchForm from "../SearchForm/SearchForm";
import arrow from "../../icons/right-arrow.svg";
import image1 from "../../img/image1.jpg";
import image2 from "../../img/image2.jpg";
import "./home.scss";
import Card from "../Card/Card";
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
                    <div className="explore">
                        <h2>INDONESIA</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut in massa lacinia, aliquam massa non,
                            euismod augue. Lorem ipsum dolor sit amet,{" "}
                        </p>
                        <button className="exploreButton">
                            <span>Explore</span>
                            <img src={arrow} alt="Clickable arrow" />
                        </button>
                    </div>
                </div>
                <SearchForm />
            </div>
            <div className="secondPage">
                <div>
                    <h2> Amazing places </h2>
                </div>
                <div className="suggestionCards">
                    <Card
                        img={image1}
                        alt="First one"
                        title="Bali, Indonesia"
                    />
                    <Card
                        img={image2}
                        alt="First one"
                        title="Bali, Indonesia"
                    />
                    <Card
                        img={image1}
                        alt="First one"
                        title="Bali, Indonesia"
                    />
                    <Card
                        img={image2}
                        alt="First one"
                        title="Bali, Indonesia"
                    />
                </div>
            </div>
        </main>
    );
};
export default Home;
