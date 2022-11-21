import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useFlightContext } from "../../src/components/CommonContexts/FlightsContext";
import style from "../../styles/FlightSummary.module.scss";
import Flight from "../../src/components/ReviewTrip/Flight";
import Image from "next/image";
function FlightSummary() {
  const router = useRouter();
  const { chosenFlight } = useFlightContext();
  const [activeTab, setActiveTab] = useState();
  useEffect(() => {
    console.log(chosenFlight);
  }, []);
  return (
    <div className={style.wrapper}>
      <div className={style.flightsInfoWrapper}>
        <div className={style.sectionTitle}>Flight information</div>
        <div className={style.flightsWrapper}>
          <Flight />
          <Flight />
          <div className={style.flight}>Second</div>
        </div>
        <div className={style.segmentsDetails}>
          <div className={style.flightTab}>
            <div className={style.segment}>Segment</div>
            <div className={style.segment}>Segment</div>
            <div className={style.segment}>Segment </div>
          </div>
          <div className={style.flightTab}></div>
        </div>
      </div>
      <div className={style.fareSummaryWrapper}>
        <h1 className={style.sectionTitle}>Fare Summary</h1>
        <div className={style.fareSummarySection}>
          <h1>Flight Summary</h1>
          <div className={style.row}>
            <span>1 Child</span>
            <span>210 USD</span>
          </div>
          <div className={style.row}>
            <span>1 Adult</span>
            <span>210 USD</span>
          </div>
          <div className={style.lineSeperator}></div>
          <div className={`${style.row} ${style.tax}`}>
            <span>Tax</span>
            <span>12.2 USD</span>
          </div>
          <div className={style.lineSeperator}></div>

          <div className={`${style.row} ${style.total}`}>
            <span>Total</span>
            <span>600 USD</span>
          </div>
        </div>
        <div className={style.fareSummarySection}>
          <h1>Flight Summary</h1>
        </div>
      </div>
    </div>
  );
}

export default FlightSummary;
