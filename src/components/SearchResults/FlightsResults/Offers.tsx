import FlightOffer from "./FlightOffer";
import { flightOffersT } from "./types";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
var offers = require("./offers.json");

const FlightOffers = ({ searchQuery, airports }: flightOffersT) => {
  // let Reso;
  // if (offers) {
  //     console.log(offers);
  // }
  const [searchResults, setSearchResults] = useState<Array<Object>>(offers);

  useEffect(() => {
    (async () => {
      try {
        // if (from && to && date) {
        //     setSearchResults(
        //         await fetchFlights({
        //             from: from,
        //             to: to,
        //             date: date,
        //             returnDate: returnDate,
        //             adults: 1,
        //             children: 0,
        //         })
        //     );
        // }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      {searchResults.map((offer: any) => {
        const iten = offer.itineraries[0];
        const segmentsLength = iten.segments.length;
        const firstSegment = iten.segments[0];
        const lastSegment = iten.segments[segmentsLength - 1];
        const depAirports: any = [];
        const desAirports: any = [];
        iten.segments.forEach((segment: any) => {
          depAirports.push(segment.departure.iataCode);
          desAirports.push(segment.arrival.iataCode);
        });
        return (
          <FlightOffer
            key={offer.id}
            duration={iten.duration.slice(2).replace(/H/, "H ")}
            price={offer.price.total}
            stopsNumber={`${segmentsLength - 1}`}
            stops={depAirports.slice(1)}
            departureTime={firstSegment.departure.at.slice(-8, -3)}
            arrivalTime={lastSegment.arrival.at.slice(-8, -3)}
            departure={depAirports[0]}
            destination={desAirports[desAirports.length - 1]}
            airports={airports}
          />
        );
      })}
    </>
  );
};

export default FlightOffers;
