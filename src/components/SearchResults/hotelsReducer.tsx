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
        adults: (parseInt(prevState.adults) + 1).toString(),
      };
    case "removeAdult":
      return {
        ...prevState,
        adults: (parseInt(prevState.adults) - 1).toString(),
      };
    case "addRoom":
      return {
        ...prevState,
        adults: (parseInt(prevState.adults) + 1).toString(),
      };
    case "addChild":
      return {
        ...prevState,
        children: (parseInt(prevState.children) + 1).toString(),
      };
    case "removeChild":
      return {
        ...prevState,
        children: (parseInt(prevState.children) + 1).toString(),
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
