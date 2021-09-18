type suggestionType = {
    place_id: string;
    structured_formatting: {
        main_text: string;
        secondary_text: string;
    };
};
function isInvalid(searchTerm: string) {
    return (
        typeof searchTerm !== "string" ||
        (typeof searchTerm === "string" && searchTerm.length === 0)
    );
}

export async function hotelAutoComplete(searchTerm: string) {
    let temp: Array<string[]> = [];

    if (isInvalid(searchTerm)) return temp;

    try {
        const rawSuggestions = await fetch(
            `https://goodtripz.oa.r.appspot.com/autocomplete/hotels?query=${searchTerm}`
        );
        const suggestions = await rawSuggestions.json();
        suggestions.forEach((suggestion: suggestionType) => {
            temp.push([
                suggestion.place_id,
                suggestion.structured_formatting.main_text,
                suggestion.structured_formatting.secondary_text,
            ]);
        });
        return temp;
    } catch (err) {
        console.log(err);
        return temp;
    }
}
type airportsResultType = {
    item: { [key: string]: string };
};
export async function airportAutocomplete(searchTerm: string) {
    let temp: Array<string[]> = [];

    if (isInvalid(searchTerm)) return temp;

    try {
        const results = await (
            await fetch(
                `https://goodtripz.oa.r.appspot.com/autocomplete/airports?query=${searchTerm}`
            )
        ).json();
        results.forEach((result: airportsResultType) => {
            temp.push([
                `${result.item.Id}`,
                `${result.item.Name} (Code: ${result.item.IATA})`,
                `${result.item.City} , ${result.item.Country}`,
            ]);
        });
        return temp;
    } catch (error) {
        console.log("ERROOOOR", error);
        return temp;
    }
}

// const APILink = "https://api.aviowiki.com/free/airports/search?query";
// const fetchProxy = "https://api.codetabs.com/v1/proxy/?quest";
// export async function airportAutocomplete(searchTerm: string) {
//     let APIResults: any = await fetch(`${fetchProxy}=${APILink}=${searchTerm}`);
//     let suggestions = (await APIResults.json()).content;
//     let page: Array<string[]> = [];
//     suggestions.forEach((result: any) => {
//         page.push([
//             `${result.name ? result.name : ""} ${
//                 result.iata ? " (Code: " + result.iata + ")" : ""
//             }`,
//             `${result.servedCity ? result.servedCity + "," : ""}
//             ${result.country.name ? result.country.name : ""}`,
//         ]);
//     });
//     return page;
// }
