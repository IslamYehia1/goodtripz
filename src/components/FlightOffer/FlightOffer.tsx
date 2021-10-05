import style from "./FlightOffer.module.scss";
import AirlineLogo from "../../../public/img/airlineLogo.svg";
import { propsType } from "./types";
const FlightOffer = (props: propsType) => {
    return (
        <div className={style.flightOffer}>
            <div className={style.firstRow}>
                <div className={style.departure}>
                    {/* <div className="time departureTime">14:00</div> */}
                    <div className={`${style.time} ${style.departureTime}`}>
                        {props.departureTime}
                    </div>
                    <div className={style.departureCity}>
                        {`${props.cities.from} (${props.departure})`}
                    </div>
                </div>
                <div className={style.details}>
                    <span>
                        {`${props.duration} , ${props.stopsNumber}`} Stop in{" "}
                        {props.stops.toString()}
                    </span>
                </div>
                <div className={style.arrival}>
                    {/* <div className="time arrivalTime">14:00</div> */}
                    <div className={`${style.time} ${style.arrivalTime}`}>
                        {props.arrivalTime}
                    </div>
                    {/* <div className="arrivalCity">New York (NYC)</div> */}
                    <div className={style.arrivalCity}>
                        {`${props.cities.to} (${props.destination})`}
                    </div>
                </div>
                <div className={style.twoCircles}>
                    <svg
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="8"
                            cy="8"
                            r="7"
                            stroke="#0A1F39"
                            strokeWidth="2"
                            fill="#F7F9FC"
                        />
                    </svg>
                    <svg
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="8"
                            cy="8"
                            r="7"
                            stroke="#0A1F39"
                            strokeWidth="2"
                            fill="#F7F9FC"
                        />
                    </svg>
                    <svg>
                        <line
                            x1="0"
                            // y1="6.5"
                            x2="100%"
                            // y2="6.49998"
                            stroke="#C4C4C4"
                            strokeDasharray="3 8"
                        />
                    </svg>
                </div>
                {/* <TwoCircles /> */}
            </div>
            <div className={style.middleRow}></div>
            <div className={style.lastRow}>
                <div className={style.airline}>
                    <AirlineLogo className={style.logo} />
                    {/* Delta Airline */}
                </div>
                <div className={style.fare}>
                    <span className={style.class}>
                        <span>Economy</span>
                    </span>
                    <span className={style.price}>
                        {props.price}
                        <span>Per person</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default FlightOffer;
