import type { NextPage } from "next";
import { useEffect } from "react";
import style from "../styles/Home.module.scss";
import { RightArrow } from "../src/components/Icons";
import SearchForm from "../src/components/SearchForm";
import Card from "../src/components/Card/Card";
import Article from "../src/components/Article/Article";
import image1 from "../public/img/image1.jpg";
import image2 from "../public/img/image2.jpg";
const Home: NextPage = () => {
    useEffect(() => {
        let vh = window.innerHeight * 0.01;
        // let vw = document.documentElement.clientWidth / 100;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
        // document.documentElement.style.setProperty("--vw", `${vw}px`);

        window.addEventListener("resize", () => {
            vh = window.innerHeight * 0.01;
            // vw = document.documentElement.clientWidth / 100;
            // document.documentElement.style.setProperty("--vw", `${vw}px`);
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        });
    }, []);
    return (
        <main id={style.homepage}>
            <div className={style.homeSectionOne}>
                <div className={style.recommendation}>
                    <div className={style.explore}>
                        <h3>
                            INDONESIA <RightArrow />
                        </h3>
                        <span className={style.exploreText}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                            <p>
                                Ut in massa lacinia, aliquam massa non, euismod
                                augue. Lorem ipsum dolor sit amet,{" "}
                            </p>
                        </span>

                        <button className={style.exploreButton}>
                            <span>Explore</span>
                            {/* <Image alt="right arrow" src={RightArrow} /> */}
                        </button>
                    </div>
                </div>
                <SearchForm />
            </div>
            <div className={style.homeSectionTwo}>
                <div>
                    <h2> Amazing places </h2>
                </div>
                <div className={style.suggestionCards}>
                    <Card
                        className={style.card}
                        img={image1}
                        alt="First one"
                        title="Bali, Indonesia"
                    />
                    <Card
                        className={style.card}
                        img={image2}
                        alt="First one"
                        title="Bali, Indonesia"
                    />
                    <Card
                        className={style.card}
                        img={image1}
                        alt="First one"
                        title="Bali, Indonesia"
                    />
                    <Card
                        className={style.card}
                        img={image2}
                        alt="First one"
                        title="Bali, Indonesia"
                    />
                </div>
            </div>
            <div className={style.homeSectionThree}>
                <Article />
            </div>
        </main>
    );
};

export default Home;
