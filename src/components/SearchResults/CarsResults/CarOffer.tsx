import style from "./CarOffer.module.scss";
import Image from "next/image";
import DoorIcon from "../../../../public/icons/carDoor.svg";
import SeatIcon from "../../../../public/icons/carSeat.svg";
import GasIcon from "../../../../public/icons/gas.svg";
import MaxSpeedIcon from "../../../../public/icons/maxSpeed.svg";
function CarOffer({ carImg }: any) {
  return (
    <div className={style.carOfferWrapper}>
      <div className={style.carImgWrapper}>
        <div className={style.imgWrapper}>
          <Image className={style.img} src={carImg} />
        </div>
      </div>
      <div className={style.offerTextWrapper}>
        <div className={style.info}>
          <h1>Hyundai Elantra</h1>
          <h4>Standard Sedan, Automatic</h4>
          <div className={style.carOptions}>
            Automatic, Air Conditioning, additional options available, AM/FM Stereo
          </div>
        </div>

        <div className={style.carHighlights}>
          <div className={style.seats}>
            <span>
              <SeatIcon />
            </span>
            <span>4 Seats</span>
          </div>
          <div className={style.doors}>
            <span>
              <DoorIcon />
            </span>
            <span>4 Doors</span>
          </div>
          <div className={style.fuel}>
            <span>
              <GasIcon />
            </span>
            <span>35 mpg</span>
          </div>
          <div className={style.bags}>
            <MaxSpeedIcon />
            <span>120 MPH</span>
          </div>
        </div>
        <div className={style.price}>
          <div className={style.perDay}>
            <span>351</span>
            <span>Per day</span>
          </div>
          <div className={style.total}>
            <span>351</span>
            <span>Total</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CarOffer;
