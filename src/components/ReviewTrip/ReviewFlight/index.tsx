import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useFlightContext } from "src/components/CommonContexts/FlightsContext";
import S from "./ReviewFlight.module.scss";
import Flight from "./Flight";
import SegmentsDetails from "./SegmentsDetails";
import Image from "next/image";
import useIsMobile from "src/utils/useIsMobile";
import FlightPrice from "./FlightPrice";
import Button from "../../Button/Button";
import { LongRightArrow } from "../../Icons";
function ReviewFlight() {
  const router = useRouter();
  const isMobile = useIsMobile();
  const { chosenFlight } = useFlightContext();
  useEffect(() => {
    console.log(chosenFlight);
  }, []);
  return (
    <>
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
          <SegmentsDetails />
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
      <Button
        handleClick={() => {
          router.push("/checkout");
        }}
        className={S.btn}
      >
        Checkout <LongRightArrow />
      </Button>
    </>
  );
}

export default ReviewFlight;
