import SearchForm from "../../components/SearchForm";
import Article from "../../components/Article/Article";
import image1 from "../../img/image1.jpg";
import image2 from "../../img/image2.jpg";
import "./home.scss";
import Card from "../../components/Card/Card";
import { RightArrow } from "../../components/Icons";
import { propsType } from "./types";

const Home = (props: propsType) => {
    return (
        <main id="homepage">
            <div className="homeSectionOne">
                <div className="recommendation">
                    <div className="explore">
                        <h3>
                            INDONESIA <RightArrow />
                        </h3>
                        <span className="exploreText">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                            <p>
                                Ut in massa lacinia, aliquam massa non, euismod
                                augue. Lorem ipsum dolor sit amet,{" "}
                            </p>
                        </span>

                        <button className="exploreButton">
                            <span>Explore</span>
                            <RightArrow />
                        </button>
                    </div>
                </div>
                <SearchForm />
            </div>
            <div className="homeSectionTwo">
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
            <div className="homeSectionThree">
                <Article />
            </div>
        </main>
    );
};
export default Home;
