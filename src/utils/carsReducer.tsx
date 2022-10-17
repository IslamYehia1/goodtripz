export default function reducer(prevState: any, action: any) {
  switch (action.type) {
    case "pickUpPlace":
      return { ...prevState, pickUpPlace: action.val };
    case "dropOffPlace":
      return { ...prevState, dropOffPlace: action.val };
    case "pickUpDate":
      return { ...prevState, pickUpDate: action.val };
    case "pickUpTime":
      return { ...prevState, pickUpTime: action.val };
    case "dropOffTime":
      return { ...prevState, dropOffTime: action.val };
    default:
      console.log("This action.type is not found");
      return prevState;
  }
}
