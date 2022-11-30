// import roomPicture from "../../img/room1.jpg";
import { propsType } from "./types";
import { PoolIcon, PetIcon, Star } from "src/components/Icons";
import Image from "next/image";
import style from "./HotelOffer.module.scss";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
const HotelOffer = (props: propsType) => {
  const router = useRouter();

  function handleClick() {
    router.push({
      pathname: "/hotelReview/",
      query: {
        // offer: props.destination,
      },
    });
  }
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
      }}
      transition={{
        duration: 0.3,
      }}
      onClick={handleClick}
      className={style.hotelOffer}
    >
      <div className={style.hotelPicture}>
        {props.picture && (
          <Image
            // layout="responsive"
            quality="100"
            // width="100"
            // height="100"
            // unoptimized
            fill
            className={style.img}
            src={props.picture}
            alt="The room"
          />
        )}
      </div>

      <div className={style.hotelDetails}>
        <div className={style.reviews}>
          <Star /> <span>{props.reviews}</span>
        </div>
        <div className={style.hotelInfo}>
          <div className={style.hotelName}>{props.hotelName}</div>
          <div className={style.address}>{props.address}</div>
        </div>
        <div className={style.lilAminities}>
          <div className={style.lilAmenity}>
            <PoolIcon />
            <span>Pool</span>
          </div>
          <div className={style.lilAmenity}>
            <PetIcon />
            <span>Pets allowed</span>
          </div>
        </div>
        <div className={style.refundable}>{props.refundable}</div>
        <div className={style.price}>
          <div className={style.dollarAmount}>{`${props.price} `}</div>
          <div className={style.per}>
            <span>{`Per `}</span>
            <span>/</span>
            <span>night</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default HotelOffer;
