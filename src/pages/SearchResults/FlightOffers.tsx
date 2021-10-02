import FlightOffer from "../../components/FlightOffer/FlightOffer";
import { flightOffersT } from "./types";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchAirport } from "../../utils/fetchAirportName";

var offers = require("./offers.json");
const FlightOffers = (props: flightOffersT) => {
    // let Reso;
    // if (offers) {
    //     console.log(offers);
    // }
    const [searchResults, setSearchResults] = useState<Array<Object>>(offers);
    const queryParams = new URLSearchParams(useLocation().search);
    const query = {
        from: queryParams.get("from"),
        to: queryParams.get("to"),
        date: queryParams.get("date"),
        returnDate: queryParams.get("returnDate") || undefined,
    };
    const [cities, setCities] = useState({
        from: "City",
        to: "City",
    });

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
                if (query.from && query.to) {
                    const fromCity = await fetchAirport(query.from);
                    const toCity = await fetchAirport(query.to);
                    if (toCity && fromCity) {
                        setCities({
                            from: fromCity.City,
                            to: toCity.City,
                        });
                    }
                }
            } catch (error) {
                console.log(error);
            }
        })();
    }, [query.from, query.to, query.date, query.returnDate]);

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
                        duration={iten.duration.slice(2).replace(/H/, "H ")}
                        price={offer.price.total}
                        stopsNumber={`${segmentsLength - 1}`}
                        stops={depAirports.slice(1)}
                        departureTime={firstSegment.departure.at.slice(-8, -3)}
                        arrivalTime={lastSegment.arrival.at.slice(-8, -3)}
                        departure={depAirports[0]}
                        destination={desAirports[desAirports.length - 1]}
                        cities={cities}
                    />
                );
            })}
        </>
    );
};

export default FlightOffers;
