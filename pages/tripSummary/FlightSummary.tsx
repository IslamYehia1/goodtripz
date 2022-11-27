import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useFlightContext } from "../../src/components/CommonContexts/FlightsContext";
import S from "../../styles/FlightSummary.module.scss";
import Flight from "../../src/components/ReviewTrip/Flight";
import Image from "next/image";
import { RightPlane } from "src/components/Icons";
import useIsMobile from "src/utils/useIsMobile";
import airline from "public/img/Emirates_Airlines.png";

// const airline = "public/img/Emirates_Airlines.png";
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

function FlightSummary() {
  const router = useRouter();
  const isMobile = useIsMobile();
  const { chosenFlight } = useFlightContext();
  const [activeTab, setActiveTab] = useState("departure");
  useEffect(() => {
    console.log(chosenFlight);
  }, []);
  return (
    <div className={S.wrapper}>
      <div className={S.flightsInfoWrapper}>
        {!isMobile && (
          <>
            <h1 className={S.sectionTitle}>Flight information</h1>
            <div className={S.flightsWrapper}>
              <Flight />
              <Flight />
            </div>
          </>
        )}
        <div className={S.segmentsDetails}>
          <div className={S.tabs}>
            <div
              data-tab={"departure"}
              onClick={() => setActiveTab("departure")}
              className={`${S.flightTab} ${activeTab === "departure" && S.active}`}
            >
              <div>Departure Flight</div>
              {!isMobile && (
                <div className={S.flightTitle}>
                  <span>From NYC</span>
                  <RightPlane />
                  <span>To YNC</span>
                </div>
              )}
            </div>
            <div
              data-tab={"departure"}
              onClick={() => setActiveTab("destination")}
              className={`${S.flightTab} ${activeTab === "destination" && S.active}`}
            >
              <div>Return Flight</div>
              {!isMobile && (
                <div className={S.flightTitle}>
                  <span>From NYC</span>
                  <RightPlane />
                  <span>To YNC</span>
                </div>
              )}
            </div>
          </div>
          <div>
            {activeTab == "departure" && (
              <FlightPath
                flightPath={[
                  {
                    fromAirport: "From NewYork international airport. (NYC)",
                    toAirport: "To Jf Kennedy internationnal airport (JFK)",
                    fromDate: "11 Apr 2021 at 5:00PM",
                    toDate: "11 Apr 2021 at 5:00PM",
                    airlineLogo: airline,
                  },
                ]}
              />
            )}
            {activeTab == "destination" && (
              <FlightPath
                flightPath={[
                  {
                    fromAirport: "From NewYork international airport. (NYC)",
                    toAirport: "To Jf Kennedy internationnal airport (JFK)",
                    fromDate: "11 Apr 2021 at 5:00PM",
                    toDate: "11 Apr 2021 at 5:00PM",
                    airlineLogo: airline,
                  },
                ]}
              />
            )}
          </div>
        </div>
      </div>
      <div className={S.fareSummaryWrapper}>
        <h1 className={S.sectionTitle}>Fare Summary</h1>
        <div className={S.fareSummarySection}>
          <h1>Flight Summary</h1>
          <div className={S.row}>
            <span>1 Child</span>
            <span>210 USD</span>
          </div>
          <div className={S.row}>
            <span>1 Adult</span>
            <span>210 USD</span>
          </div>
          <div className={S.lineSeperator}></div>
          <div className={`${S.row} ${S.tax}`}>
            <span>Tax</span>
            <span>12.2 USD</span>
          </div>
          <div className={S.lineSeperator}></div>

          <div className={`${S.row} ${S.total}`}>
            <span>Total</span>
            <span>600 USD</span>
          </div>
        </div>
        <div className={S.fareSummarySection}>
          <h1>Flight Summary</h1>
        </div>
      </div>
    </div>
  );
}

export default FlightSummary;
