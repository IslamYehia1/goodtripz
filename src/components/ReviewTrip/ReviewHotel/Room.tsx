import style from "./reviewHotel.module.scss";
import HotelImg from "public/img/pexels-michael-block-3225531.jpg";
import Image from "next/image";
import { WifiIcon, BreakfastIcon, SizeIcon } from "src/components/Icons";
function Room() {
  return (
    <div className={style.room}>
      <div className={style.roomImg}>
        <div className={style.overlay}></div>
        <Image fill src={HotelImg} alt="Hotel Picture" />
        <div className={style.price}>200$ </div>
        <div className={style.roomType}>Standard room, 2 Double beds</div>
      </div>
      <div className={style.roomProps}>
        <div className={style.roomAmenitites}>
          <div className={style.roomAmenity}>
            <WifiIcon />
            Free Wifi
          </div>
          <div className={style.roomAmenity}>
            <BreakfastIcon />
            Breakfast included
          </div>
          <div className={style.roomAmenity}>
            <SizeIcon />
            Breakfast included
          </div>
        </div>
        <div className={style.isRefundable}>Refundable</div>
      </div>
    </div>
  );
}

export default Room;
