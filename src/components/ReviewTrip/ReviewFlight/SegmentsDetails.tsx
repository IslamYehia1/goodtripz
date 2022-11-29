import S from "./ReviewFlight.module.scss";
import { RightPlane } from "src/components/Icons";
import useIsMobile from "src/utils/useIsMobile";
import { useEffect, useState } from "react";
import FlightPath from "./FlightPath";
import airline from "public/img/Emirates_Airlines.png";

function SegmentsDetails() {
  const [activeTab, setActiveTab] = useState("departure");
  const isMobile = useIsMobile();

  return (
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
  );
}

export default SegmentsDetails;
