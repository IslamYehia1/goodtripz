/* Amadeus flight search API documentation  
https://developers.amadeus.com/self-service/category/air/api-doc/flight-offers-search/api-reference
*/

export async function fetchFlights() {
    const flightSearch = await fetch(
        "https://goodtripz.oa.r.appspot.com/searchResults/flights?departure=CAI&destination=NYC&departureDate=2021-10-01&adultsNumber=1&childrenNumber=0"
    );
    const results = await flightSearch.json();
    return results;
}

export async function fetchHotels() {}
