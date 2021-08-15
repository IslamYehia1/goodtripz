const APILink = "https://api.aviowiki.com/free/airports/search?query";
const fetchProxy = "https://api.codetabs.com/v1/proxy/?quest";

async function airportAutocomplete(queryString: string) {
    let APIResults: any = await fetch(
        `${fetchProxy}=${APILink}=${queryString}`
    );
    let suggestions = (await APIResults.json()).content;
    let page: Array<string[]> = [];
    suggestions.forEach((result: any) => {
        page.push([
            `${result.name ? result.name : ""} ${
                result.iata ? " (Code: " + result.iata + ")" : ""
            }`,
            `${result.servedCity ? result.servedCity + "," : ""} 
            ${result.country.name ? result.country.name : ""}`,
        ]);
    });
    return page;
}

export default airportAutocomplete;
