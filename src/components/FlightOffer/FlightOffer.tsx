import "./flightOffer.scss";
import airlineLogo from "../../img/airlineLogo.svg";
import { ReactComponent as wideTwoCircles } from "../../img/wideTwoCircles.svg";
import { ReactComponent as TwoCircles } from "../../img/twoCircles.svg";
import { useEffect } from "react";
type propsType = {};
const FlightOffer = (props: propsType) => {
    return (
        <div className="flightOffer">
            <div className="firstRow">
                <div className="departure">
                    <div className="time departureTime">14:00</div>
                    <div className="departureCity">New York (NYC)</div>
                </div>
                <div className="details">
                    <span>11H 20M, 1 Stop in JFK</span>
                </div>
                <div className="arrival">
                    <div className="time arrivalTime">14:00</div>
                    <div className="arrivalCity">New York (NYC)</div>
                </div>
                <div className="twoCircles">
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
                            stroke-width="2"
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
            <div className="middleRow"></div>
            <div className="lastRow">
                <div className="airline">
                    <img
                        src={airlineLogo}
                        alt="Emiraties Airlines"
                        className="logo"
                    />
                    {/* Delta Airline */}
                </div>
                <div className="fare">
                    <span className="class">
                        <span>Economy</span>
                    </span>
                    <span className="price">
                        $200
                        <span>Per person</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default FlightOffer;
