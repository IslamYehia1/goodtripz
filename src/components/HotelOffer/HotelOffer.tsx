import roomPicture from "../../img/room1.jpg";
import { propsType } from "./types";
import { PoolIcon, PetIcon } from "../Icons";
const HotelOffer = (props: propsType) => {
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
