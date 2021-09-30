/* Amadeus flight search API documentation  
https://developers.amadeus.com/self-service/category/air/api-doc/flight-offers-search/api-reference
*/

export async function fetchFlights(params: {
    from: string;
    to: string;
    date: string;
    returnDate?: string;
    adults: number;
    children?: number;
}) {
    const flightSearch = await fetch(
        `https://goodtripz.oa.r.appspot.com/searchResults/flights?departure=${params.from}&destination=${params.to}&departureDate=${params.date}&adultsNumber=${params.adults}&childrenNumber=${params.children}`
    );
    const results = await flightSearch.json();
    return results;
}

export async function fetchHotels() {}
