export type searchTermsT = {
  type: string;
  from: any;
  to: any;
  date: string;
  returnDate: string;
  adults: any;
  children: any;
  chosenFlight?: any;
};

type actionT =
  | {
      type: string;
      val: string;
      IATA?: string;
      query?: any;
    }
  | {
      type: "addAdult" | "removeAdult" | "addChild" | "removeChild";
    }
  | {
      type: "pullFromUrl";
      query: any;
    };
// const { from, to, date, returnDate, adults, children } = useRouter().query;
export default function reducer(prevState: searchTermsT, action: actionT): searchTermsT {
  switch (action.type) {
    case "pullFromUrl":
      const { from, to, date, returnDate, adults, children } = action.query;
      if (from && to && date) {
        return {
          type: returnDate ? `oneWay` : `roundTrip`,
          from: { IATA: from },
          to: { IATA: to },
          date: `${date}`,
          returnDate: returnDate ? `${returnDate}` : "",
          adults: adults ? adults : "1",
          children: children ? children : "0",
        };
      } else {
        return prevState;
      }
    case "flightType":
      return {
        ...prevState,
        type: action.val,
      };
    case "from":
      return {
        ...prevState,
        from: {
          name: action.val,
          IATA: action.IATA ? action.IATA : undefined,
        },
      };
    case "to":
      return {
        ...prevState,
        to: {
          name: action.val,
          IATA: action.IATA ? action.IATA : undefined,
        },
      };
    case "date":
      return { ...prevState, date: action.val };
    case "returnDate":
      return { ...prevState, returnDate: action.val };
    case "addAdult":
      return {
        ...prevState,
        adults:
          prevState.adults < 4 ? (parseInt(prevState.adults) + 1).toString() : prevState.adults,
      };
    case "removeAdult":
      return {
        ...prevState,
        adults:
          prevState.adults > 1 ? (parseInt(prevState.adults) - 1).toString() : prevState.adults,
      };
    case "addChild":
      return {
        ...prevState,
        children:
          prevState.children < 4
            ? (parseInt(prevState.children) + 1).toString()
            : prevState.children,
      };
    case "adultsCount":
      return {
        ...prevState,
        adults: action.val,
      };
    case "childrenCount":
      return {
        ...prevState,
        children: action.val,
      };
    case "removeChild":
      return {
        ...prevState,
        children:
          prevState.children > 0
            ? (parseInt(prevState.children) - 1).toString()
            : prevState.children,
      };
    case "chosenFlight":
      return {
        ...prevState,
        chosenFlight: action.val,
      };
    default:
      return prevState;
  }
}
