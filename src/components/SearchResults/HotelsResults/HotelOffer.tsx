// import roomPicture from "../../img/room1.jpg";
import { propsType } from "./types";
import { PoolIcon, PetIcon, Star } from "src/components/Icons";
import Image from "next/image";
import style from "./HotelOffer.module.scss";
const HotelOffer = (props: propsType) => {
  return (
    <div className={style.hotelOffer}>
      <div className={style.hotelPicture}>
        {props.picture && (
          <Image
            // layout="responsive"
            quality="100"
            // width="100"
            // height="100"
            // unoptimized
            layout="fill"
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
    </div>
  );
};
export default HotelOffer;
