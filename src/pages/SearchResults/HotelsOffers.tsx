import HotelOffer from "../../components/HotelOffer/HotelOffer";
const hotelOffers = require("./hotelOffers.json");
const HotelOffers = () => {
    const offers = hotelOffers.data.map(
        ({ price, name, location_string, num_reviews, rating, photo }: any) => {
            if (!(price || name || location_string || num_reviews || rating)) {
                return undefined;
            }
            return (
                <HotelOffer
                    reviews={`${rating}/5 (${num_reviews} reviews)`}
                    picture={photo.images.medium.url}
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
