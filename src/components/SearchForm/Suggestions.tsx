import "./suggestions.scss";
import airportIcon from "../../icons/airport.svg";
import { clientID, clientSecret } from "../../../apiCreds";
type propsType = {
    suggestions: Array<string[]>;
    className: string;
    autocompleteSetter?: React.Dispatch<React.SetStateAction<string>>;
    onSuggestionClick?: () => void;
};
const Suggestions = (props: propsType) => {
    const suggestions = props.suggestions.map((suggestion) => (
        <li
            onClick={() => {
                if (props.autocompleteSetter) {
                    props.autocompleteSetter(
                        `${suggestion[0]}${suggestion[1]}`
                    );
                }
                if (props.onSuggestionClick) props.onSuggestionClick();
            }}
        >
            <img src={airportIcon} alt="Airport drawing" />
            <div>
                <span>{suggestion[0]}</span>
                <span>{suggestion[1]}</span>
            </div>
        </li>
    ));
    return (
        <ul tabIndex={0} className={props.className}>
            {suggestions}
        </ul>
    );
};

export default Suggestions;

// useEffect(() => {
//     (async () => {
//         const response = await (
//             await fetch(
//                 "https://test.api.amadeus.com/v1/security/oauth2/token",
//                 {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/x-www-form-urlencoded",
//                     },
//                     body: "grant_type=client_credentials&client_id=${clientID}&client_secret=${clientSecret}",
//                 }
//             )
//         ).json();
//         const accessToken = `${response.token_type} ${response.access_token}`;
//         console.log(accessToken);
//         const flightSearch = await fetch(
//             "https://test.api.amadeus.com/v1/shopping/availability/flight-availabilities",
//             {
//                 method: "POST",
//                 headers: {
//                     Authorization: accessToken,
//                     accept: "application/vnd.amadeus+json",
//                     "Content-Type": "application/vnd.amadeus+json",
//                 },
//                 body: JSON.stringify({
//                     originDestinations: [
//                         {
//                             id: "1",
//                             originLocationCode: "BOS",
//                             destinationLocationCode: "MAD",
//                             departureDateTime: {
//                                 date: "2021-11-14",
//                                 time: "21:15:00",
//                             },
//                         },
//                     ],
//                     travelers: [
//                         {
//                             id: "1",
//                             travelerType: "ADULT",
//                         },
//                     ],
//                     sources: ["GDS"],
//                 }),
//             }
//         );
//         const results = await flightSearch.json();

//         console.log(results);
//     })();
// }, []);
