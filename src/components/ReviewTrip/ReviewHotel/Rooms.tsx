import Room from "./Room";
import style from "./reviewHotel.module.scss";
import { useRef, useEffect } from "react";
import { RightArrow } from "src/components/Icons";
import useIsMobile from "src/utils/useIsMobile";
const sideScroll = (element: HTMLDivElement, direction: any) => {
  if (!element) return;
  console.log(element);
  let scrollAmount = 0;
  element.scrollTo({
    left: element.scrollLeft + 200,
    behavior: "smooth",
  });
  //   const slideTimer = setInterval(() => {
  //     element.scrollLeft += step;
  //     scrollAmount += Math.abs(step);
  //     if (scrollAmount >= distance) {
  //       clearInterval(slideTimer);
  //     }
  //   }, speed);
};
function ScrollLeftBtn({
  container,
  direction,
}: {
  container: HTMLDivElement;
  direction: "left" | "right";
}) {
  return (
    <div
      className={style.scrollLeftBtn}
      onClick={() => {
        const scrollAmount = 300;
        const leftVal =
          direction == "left"
            ? container.scrollLeft + scrollAmount
            : container.scrollLeft - scrollAmount;
        container.scrollTo({
          left: leftVal,
          behavior: "smooth",
        });
      }}
    >
      <div className={style.circle}>
        <RightArrow />
      </div>
    </div>
  );
}
function Rooms() {
  let roomsRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  return (
    <>
      <div className={style.rooms} ref={roomsRef}>
        <Room />
        <Room />
        <Room />
      </div>
      {/* {isMobile && <ScrollLeftBtn direction="right" container={roomsRef.current!} />} */}
      {/* {isMobile && <ScrollLeftBtn direction="left" container={roomsRef.current!} />} */}
    </>
  );
}
export default Rooms;
