import HotelOffer from "../../HotelOffer/HotelOffer";
const hotelOffers = require("./hotelOffers.json");
const HotelOffers = () => {
  const offers = hotelOffers.data.map(
    ({ price, name, location_string, num_reviews, rating, photo, location_id }: any) => {
      if (!(price || name || location_string || num_reviews || rating)) {
        return undefined;
      }
      return (
        <HotelOffer
          key={location_id}
          reviews={`${rating}/5 (${num_reviews} reviews)`}
          picture={photo.images.large.url}
          hotelName={name}
          address={`${location_string}`}
          refundable="Fully refundable"
          price={price ? price.split(" - ")[0] : undefined}
        />
      );
    }
  );
  return <>{offers}</>;
};

export default HotelOffers;
