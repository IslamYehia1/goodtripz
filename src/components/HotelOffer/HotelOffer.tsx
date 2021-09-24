import roomPicture from "../../img/room1.jpg";
import { ReactComponent as PoolIcon } from "../../icons/pool_black_24dp.svg";
import { ReactComponent as PetIcon } from "../../icons/pets_black_24dp.svg";
type HotelOfferT = {
    reviews?: string;
    hotelName?: string;
    address?: string;
    amenities?: [string];
    price?: string;
    refundable?: string;
};
const HotelOffer = (props: HotelOfferT) => {
    return (
        <div className="hotelOffer">
            <img src={roomPicture} alt="The room" />

            <div className="hotelDetails">
                <div>{props.reviews}</div>
                <div>
                    <div>{props.hotelName}</div>
                    <div>{props.address}</div>
                </div>
                <div className="lilAminities">
                    <div className="lilAmenity">
                        <PoolIcon />
                        <span>Pool</span>
                    </div>
                    <div className="lilAmenity">
                        <PetIcon />
                        <span>Pets allowed</span>
                    </div>
                </div>
                <div className="hotelPrice">
                    <div className="refundable">{props.refundable}</div>
                    <div className="price">
                        <div className="dollarAmount">{`${props.price}`}</div>
                        <div>Per night</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HotelOffer;
