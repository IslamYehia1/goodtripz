import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useFlightContext } from "../../src/components/CommonContexts/FlightsContext";
import S from "styles/FlightSummary.module.scss";
import Flight from "../../src/components/ReviewTrip/Flight";
import Image from "next/image";
import { RightPlane } from "src/components/Icons";
import useIsMobile from "src/utils/useIsMobile";
import airline from "public/img/Emirates_Airlines.png";
import FlightPath from "./FlightPath";
import FlightPrice from "./FlightPrice";
// const airline = "public/img/Emirates_Airlines.png";

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
        <FlightPrice
          priceBreakdown={{
            adultsCount: 1,
            childrenCount: 1,
            childrenPrice: 100,
            adultsPrice: 100,
            totalPrice: 200,
          }}
        />
        <div className={S.fareSummarySection}>
          <h1>Flight Summary</h1>
        </div>
      </div>
    </div>
  );
}

export default FlightSummary;
