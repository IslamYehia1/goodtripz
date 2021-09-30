type airportT = {
    Name: string;
    City: string;
};
export async function fetchAirport(
    iata: string
): Promise<airportT | undefined> {
    if (typeof iata === "string" && iata.length === 3) {
        const airport = await (
            await fetch(
                `https://goodtripz.westeurope.cloudapp.azure.com/airportInfo?iata=${iata}`
            )
        ).json();
        return airport;
    } else {
        throw new Error("Please pass a proper IATA code");
    }
}
