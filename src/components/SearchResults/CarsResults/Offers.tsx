import CarOffer from "./CarOffer";
import carImg1 from "public/img/carImg.png";
import carImg2 from "public/img/carImg2.png";
import carImg3 from "public/img/carImg3.png";
import carImg4 from "public/img/carImg4.png";
function CarsOffers() {
  return (
    <>
      <CarOffer carImg={carImg1} />
      <CarOffer carImg={carImg2} />
      <CarOffer carImg={carImg3} />
      <CarOffer carImg={carImg4} />
    </>
  );
}
export default CarsOffers;
