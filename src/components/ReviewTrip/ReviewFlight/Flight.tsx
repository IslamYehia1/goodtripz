import Image from "next/image";
import style from "./ReviewFlight.module.scss";
import emirates from "public/img/Emirates_Airlines.png";
import Line from "../../../public/img/line.svg";

function Flight() {
  return (
    <div className={style.flight}>
      <Image alt="airlines logo" src={emirates} className={style.airlineLogo} />
      <div className={style.info}>
        <div className={style.airlineName}>
          <span>EMARATIES AIRLINES</span>
        </div>
        <div className={style.airplane}>
          <span>CXS11 | Airbus 333</span>
        </div>
      </div>
      <div className={style.summary}>
        <div className={style.from}>
          <span>From NYC</span>
          <span>14 Apr 2021</span>
          <span>5:00PM</span>
        </div>
        <div className={style.stops}>
          <div className={style.horizontalLineWrapper}>
            <div className={style.horizontalLine}></div>
            <div className={style.dots}>
              <div className={style.dot}></div>
              <div className={style.dot}></div>
            </div>
          </div>
        </div>
        <div className={style.to}>
          <span>To YNC</span>
          <span>14 Apr 2021</span>
          <span>5:00PM</span>
        </div>
      </div>
      <div className={style.fareType}>Economy</div>
    </div>
  );
}

export default Flight;
