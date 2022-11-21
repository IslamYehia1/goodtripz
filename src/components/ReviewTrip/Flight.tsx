import Image from "next/image";
import style from "../../../styles/FlightSummary.module.scss";
import emirates from "../../../public/img/emirates.png";
import Line from "../../../public/img/line.svg";

function Flight() {
  return (
    <div className={style.flight}>
      <Image src={emirates} className={style.airlineLogo} />
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
          <Line />
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
