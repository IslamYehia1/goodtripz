import type { NextPage } from "next";
import { useEffect, useState } from "react";
import style from "../styles/Home.module.scss";
import SearchForm from "../src/components/HomeSearchForm";
import Card from "../src/components/Card/Card";
import Article from "../src/components/Article/Article";
import image1 from "../public/img/image1.jpg";
import image2 from "../public/img/image2.jpg";
import HomePageSlider from "src/components/Slider/HomePageSlider";

const Home: NextPage = () => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    function handleResize() {
      vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <main id={style.homepage}>
        <div className={style.homeSectionOne}>
          <HomePageSlider />
          <SearchForm />
        </div>
        <div className={style.homeSectionTwo}>
          <div>
            <h2> Amazing places </h2>
          </div>
          <div className={style.suggestionCards}>
            <Card className={style.card} img={image1} alt="First one" title="Bali, Indonesia" />
            <Card className={style.card} img={image2} alt="First one" title="Bali, Indonesia" />
            <Card className={style.card} img={image1} alt="First one" title="Bali, Indonesia" />
            <Card className={style.card} img={image2} alt="First one" title="Bali, Indonesia" />
          </div>
        </div>
        <div className={style.homeSectionThree}>
          <Article />
        </div>
      </main>
    </>
  );
};

export default Home;
