export default function reducer(prevState: any, action: any) {
  switch (action.type) {
    case "pullFromUrl":
      const { place, checkIn, checkOut, adults, rooms, children } = action.query;
      return {
        place: place,
        checkIn: checkIn,
        checkOut: checkOut,
        adults: adults || "1",
        children: children || "0",
        rooms: rooms || "1",
      };
    case "place":
      return { ...prevState, place: action.val };
    case "checkIn":
      return { ...prevState, checkIn: action.val };
    case "checkOut":
      return { ...prevState, checkOut: action.val };
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
    case "addRoom":
      return {
        ...prevState,
        adults: (parseInt(prevState.adults) + 1).toString(),
      };
    case "addChild":
      return {
        ...prevState,
        children:
          prevState.children < 4
            ? (parseInt(prevState.children) + 1).toString()
            : prevState.children,
      };
    case "removeChild":
      return {
        ...prevState,
        children:
          prevState.children > 0
            ? (parseInt(prevState.children) - 1).toString()
            : prevState.children,
      };
    case "removeRoom":
      return {
        ...prevState,
        adults: (parseInt(prevState.adults) - 1).toString(),
      };
    default:
      return prevState;
  }
}
