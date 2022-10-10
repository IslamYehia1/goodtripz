const SERVER_URL = "http://goodtripz.westeurope.cloudapp.azure.com";
// const SERVER_URL = "http://localhost:8080";

type suggestionType = {
  place_id: string;
  structured_formatting: {
    main_text: string;
    secondary_text: string;
  };
};
function isInvalid(searchTerm: string) {
  return (
    typeof searchTerm !== "string" || (typeof searchTerm === "string" && searchTerm.length === 0)
  );
}
type autocompleteT = Array<{
  autocomplete: { id: string; main: string; secondary: string };
  identifier: string;
}>;
export async function hotelAutoComplete(searchTerm: string) {
  let temp: autocompleteT = [];

  if (isInvalid(searchTerm)) return temp;

  try {
    const rawSuggestions = await fetch(`${SERVER_URL}autocomplete/hotels?query=${searchTerm}`);
    const suggestions = await rawSuggestions.json();
    suggestions.forEach((suggestion: suggestionType) => {
      temp.push({
        autocomplete: {
          id: suggestion.place_id,
          main: suggestion.structured_formatting.main_text,
          secondary: suggestion.structured_formatting.secondary_text,
        },
        identifier: "ops",
      });
    });
    return temp;
  } catch (err) {
    console.log(err);
    return temp;
  }
}
type airportsResultType = {
  [key: string]: string;
};

export async function airportAutocomplete(searchTerm: string) {
  let temp: autocompleteT = [];
  if (isInvalid(searchTerm)) return temp;

  try {
    const results = await (
      await fetch(
        // `http://goodtripz.westeurope.cloudapp.azure.com/autocomplete/airports?query=${searchTerm}`
        `${SERVER_URL}/autocomplete/airports?query=${searchTerm}`
      )
    ).json();
    // results.forEach((result: airportsResultType) => {
    results.hits.forEach((result: any) => {
      temp.push({
        autocomplete: {
          id: `${result.id}`,
          main: `${result.name} (Code: ${result.iata_code})`,
          secondary: `${result.municipality} , ${result.country}`,
        },
        identifier: result.iata_code,
      });
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
