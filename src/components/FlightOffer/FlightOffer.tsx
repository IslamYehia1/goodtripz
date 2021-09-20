import "./flightOffer.scss";
import airlineLogo from "../../img/airlineLogo.svg";
import twoCircles from "../../img/twoCircles.svg";
type propsType = {};
const FlightOffer = (props: propsType) => {
    return (
        <div className="flightOffer">
            <div className="firstRow">
                <div className="departure">
                    <div className="time departureTime">14:00</div>
                    <div className="departureCity">New York (NYC)</div>
                </div>
                <div className="details">11H 20M, 1 Stop in JFK</div>
                <div className="arrival">
                    <div className="time arrivalTime">14:00</div>
                    <div className="arrivalCity">New York (NYC)</div>
                </div>
            </div>
            <div className="middleRow">
                <img src={twoCircles} alt="Graphical circles" />
            </div>
            <div className="lastRow">
                <div className="airline">
                    <img
                        src={airlineLogo}
                        alt="Emiraties Airlines"
                        className="logo"
                    />
                    Delta Airline
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
