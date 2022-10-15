import type { NextPage } from "next";
import { useEffect, useState } from "react";
import style from "../styles/Home.module.scss";
import SearchForm from "../src/components/HomeSearchForm";
import Card from "../src/components/Card/Card";
import Article from "../src/components/Article/Article";
import image1 from "../public/img/image1.jpg";
import image2 from "../public/img/image2.jpg";
import { FlightsProvider } from "../src/components/CommonContexts/FlightsContext";
import { HotelSearchProvider } from "../src/components/CommonContexts/HotelsContext";
import { RightArrow } from "../src/components/Icons";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";

import Image from "next/image";
const Home: NextPage = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const overlayControls = useAnimationControls();
  const sequence = async () => {
    await overlayControls.start({
      opacity: 0.4,
      onAnimationStart: () => {
        console.log("FIRST STARTED");
      },
      transition: {
        // delay: 1,
      },
    });
    return await overlayControls.start({
      opacity: 0.2,
      transition: {
        delay: 2,
        duration: 1,
        onAnimationStart: () => {
          console.log("SECOND STARTED");
        },
      },
    });
  };
  useEffect(() => {
    (async () => {
      await sequence();
    })();
  }, [currentImg]);

  const images = [
    "/img/background.jpg",
    "/img/background2.jpg",
    "/img/background3.jpg",
    "/img/background4.jpg",
  ];

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    function handleResize() {
      vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
    window.addEventListener("resize", handleResize);
    const interval = setInterval(() => {
      setCurrentImg((currentImg) => (currentImg + 1) % images.length);
    }, 7000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <main id={style.homepage}>
        <div className={style.homeSectionOne}>
          <div className={style.recommendation}>
            <div className={style.backgroundImgWrapper}>
              <motion.div
                animate={overlayControls}
                initial={{ opacity: 0 }}
                className={style.overlay}
              ></motion.div>
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={currentImg}
                  className={style.background}
                  initial={{ opacity: 0.1, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.8, scale: 0.9 }}
                  transition={{
                    // delay: 1,
                    opacity: {
                      duration: 0.4,
                    },
                    scale: {
                      duration: 6,
                      ease: "linear",
                    },
                  }}
                  style={{ minWidth: "100%", minHeight: "100%" }}
                  src={images[currentImg]}
                />
              </AnimatePresence>
            </div>
            <div className={style.explore}>
              <h3>
                INDONESIA <RightArrow />
              </h3>
              <span className={style.exploreText}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in massa lacinia,
                  aliquam massa non,
                </p>
                <p>euismod augue. Lorem ipsum dolor sit amet. </p>
              </span>

              <button className={style.exploreButton}>
                <span>Explore</span>
                <RightArrow alt="right arrow" src={RightArrow} />
              </button>
            </div>
          </div>
          <FlightsProvider>
            <HotelSearchProvider>
              <SearchForm />
            </HotelSearchProvider>
          </FlightsProvider>
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
