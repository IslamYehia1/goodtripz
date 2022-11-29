import style from "./reviewHotel.module.scss";
import Image from "next/image";
import HotelImg from "public/img/pexels-michael-block-3225531.jpg";
import { Loader } from "@googlemaps/js-api-loader";
import { useRef, useEffect } from "react";
import { Star } from "src/components/Icons";
let map;
const loader = new Loader({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_KEY || " ",
  version: "weekly",

  // ...additionalOptions,
});

function ReviewHotel() {
  let mapElRef = useRef(null);
  useEffect(() => {
    const hotelLocation = { lat: 36.15370036428427, lng: -115.14281265941787 };
    loader.load().then((google) => {
      map = new google.maps.Map(mapElRef.current! as HTMLElement, {
        center: hotelLocation,
        zoom: 16,
      });
      const marker = new google.maps.Marker({
        position: hotelLocation,
        map: map,
      });
    });
  }, []);
  return (
    <div className={style.wrapper}>
      <div className={style.firstColumn}>
        <div className={style.hotelNameWrapper}>
          <h1 className={style.hotelName}>Mondrian Doha Hotel</h1>
          <div className={style.hotelRate}>
            <div className={style.stars}>
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <div>4.5/5 (120 reviews)</div>
          </div>
        </div>
        <div className={style.hotelInfoWrapper}>
          <div className={style.hotelPictures}>
            <div className={style.littlePictures}>
              <div className={style.imgWrapper}>
                <Image fill alt="Hotel Img" src={HotelImg} />
              </div>
              <div className={style.imgWrapper}>
                <Image fill alt="Hotel Img" src={HotelImg} />
              </div>
              <div className={style.imgWrapper}>
                <Image fill alt="Hotel Img" src={HotelImg} />
              </div>{" "}
            </div>
            <div className={style.bigPicture}>
              <Image alt="Hotel Img" src={HotelImg} />
            </div>
          </div>
          <div>Aminities</div>
        </div>
      </div>
      <div className={style.mapWrapper}>
        <div ref={mapElRef} className={style.map}></div>
      </div>
    </div>
  );
}

export default ReviewHotel;
