import { LongRightArrow } from "src/components/Icons";
import { RightArrow } from "src/components/Icons";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
// import style from "styles/Home.module.scss";
import style from "./HomePageSlider.module.scss";
import { useEffect, useState } from "react";
const images = ["/img/indonesia.jpg", "/img/greece.jpg", "/img/maldives.jpg", "/img/dubai.jpg"];
const places = [
  {
    title: "indonesia",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in massa lacinia,aliquam massa non",
  },
  {
    title: "Greece",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in massa lacinia,aliquam massa non",
  },
  {
    title: "Maldives",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in massa lacinia,aliquam massa non",
  },
  {
    title: "Dubai",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in massa lacinia,aliquam massa non",
  },
];
function HomePageSlider() {
  const overlayControls = useAnimationControls();
  const [currentImg, setCurrentImg] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((currentImg) => (currentImg + 1) % images.length);
    }, 7000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    (async () => {
      await sequence();
    })();
  }, [currentImg]);

  const sequence = async () => {
    await overlayControls.start({
      opacity: 0.6,
      onAnimationStart: () => {},
      transition: {
        duration: 1,
        // delay: 1,
      },
    });
    return await overlayControls.start({
      opacity: 0.3,
      transition: {
        delay: 1,
        duration: 1,
        onAnimationStart: () => {},
      },
    });
  };
  return (
    <div className={style.recommendation}>
      <div className={style.backgroundImgWrapper}>
        <motion.div
          animate={overlayControls}
          initial={{ opacity: 0 }}
          className={style.overlay}
        ></motion.div>
        <AnimatePresence mode="popLayout">
          <motion.img
            key={images[currentImg]}
            className={style.background}
            initial={{ opacity: 0.1, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1.1 }}
            transition={{
              // delay: 1,
              opacity: {
                duration: 0.8,
              },
              scale: {
                duration: 5,
                ease: "easeOut",
              },
            }}
            exit={{
              opacity: 0,
              // scale: 1,
              // filter: "blur(10px)",
              transition: {
                // filter: {
                //   duration: 0.2,
                // },
                opacity: {
                  duration: 0.5,
                },
                scale: {
                  duration: 0.5,
                },
              },
            }}
            style={{ minWidth: "100%", minHeight: "100%" }}
            src={images[currentImg]}
          />
        </AnimatePresence>
      </div>
      <div className={style.exploreWrapper}>
        <AnimatePresence mode="popLayout">
          {places.map((place: any, i) => {
            return (
              currentImg === i && (
                <motion.div
                  initial={{ y: "-100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1, transition: { duration: 0.8 } }}
                  exit={{ y: "100%", opacity: 0, transition: { duration: 0.8 } }}
                  className={style.explore}
                  key={i}
                >
                  <h3>
                    {place.title} <RightArrow />
                  </h3>
                  <span className={style.exploreText}>
                    <p>{place.text}</p>
                    <p>euismod augue. Lorem ipsum dolor sit amet. </p>
                  </span>

                  <button className={style.exploreButton}>
                    <span>Explore</span>
                    <LongRightArrow alt="right arrow" />
                  </button>
                </motion.div>
              )
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
export default HomePageSlider;
