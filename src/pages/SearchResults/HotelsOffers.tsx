import HotelOffer from "../../components/HotelOffer/HotelOffer";
const HotelOffers = () => {
    return (
        <>
            <HotelOffer
                reviews="4.5/5 (120 reviews)"
                hotelName="Grand Budhabest Hotel"
                address="219, Al Mansoureya Rd, Al Haram"
                refundable="Fully refundable"
                price="200"
            />
            <HotelOffer
                reviews="4.5/5 (120 reviews)"
                hotelName="Grand Budhabest Hotel"
                address="219, Al Mansoureya Rd, Al Haram"
                refundable="Fully refundable"
                price="200"
            />
        </>
    );
};

export default HotelOffers;
