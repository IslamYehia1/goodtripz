import FlightOffer from "../../components/FlightOffer/FlightOffer";
type flightOffersT = {
    offers: Array<Object>;
    cities: {
        from: string;
        to: string;
    };
};
const FlightOffers = (props: flightOffersT) => {
    // let Reso;
    // if (offers) {
    //     console.log(offers);
    // }

    return (
        <>
            {props.offers.map((offer: any) => {
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
                        cities={props.cities}
                    />
                );
            })}
        </>
    );
};

export default FlightOffers;
