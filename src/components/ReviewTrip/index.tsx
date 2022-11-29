import ReviewFlight from "./ReviewFlight";
import ReviewHotel from "./ReviewHotel";
import S from "./style.module.scss";
function ReviewTrip() {
  return (
    <div className={S.container}>
      {/* <ReviewFlight /> */}
      <ReviewHotel />
    </div>
  );
}
export default ReviewTrip;
