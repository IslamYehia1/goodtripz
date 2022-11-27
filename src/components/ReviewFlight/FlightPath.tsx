import Image from "next/image";
import S from "styles/FlightSummary.module.scss";

type PROPS = {
  flightPath: Array<{
    fromAirport: string;
    toAirport: string;
    fromDate: string;
    toDate: string;
    airlineLogo: any;
  }>;
};
function FlightPath({ flightPath }: PROPS) {
  return (
    <div className={S.segmentsWrapper}>
      {flightPath.map(({ fromAirport, toAirport, fromDate, toDate, airlineLogo }) => {
        return (
          <>
            <div className={S.logo}>
              <Image alt="airport" src={airlineLogo} className={S.airlineLogo} />
            </div>
            <div className={S.segmentsTime}>
              <div className={`${S.segmentTime} ${S.departureTime}`}>
                <div>{fromDate}</div>
              </div>
              <div className={`${S.segmentTime} ${S.arrivalTime}`}>
                <div>{toDate}</div>
              </div>
            </div>
            <div className={S.lineWrapper}>
              <div className={S.line}></div>
              <div className={`${S.dot} ${S.dot1}`}></div>
              <div className={`${S.dot} ${S.dot2}`}></div>
            </div>
            <div className={S.segments}>
              <div className={`${S.segment} ${S.segment1}`}>
                <div>{fromAirport}</div>
              </div>
              <div className={`${S.segment} ${S.segment2}`}>
                <div>{toAirport} </div>
              </div>{" "}
            </div>
          </>
        );
      })}
    </div>
  );
}

export default FlightPath;
