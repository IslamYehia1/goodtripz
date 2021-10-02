import roomPicture from "../../img/room1.jpg";
import { propsType } from "./types";
import { PoolIcon, PetIcon, Star } from "../Icons";
const HotelOffer = (props: propsType) => {
    return (
        <div className="hotelOffer">
            <div className="hotelPicture">
                <img src={roomPicture} alt="The room" />
            </div>

            <div className="hotelDetails">
                <div className="reviews">
                    <Star /> <span>{props.reviews}</span>
                </div>
                <div className="hotelInfo">
                    <div className="hotelName">{props.hotelName}</div>
                    <div className="address">{props.address}</div>
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
                <div className="refundable">{props.refundable}</div>
                <div className="price">
                    <div className="dollarAmount">{`${props.price} `}</div>
                    <div className="per">
                        <span>Per</span>
                        <span>/</span>
                        <span>night</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HotelOffer;
