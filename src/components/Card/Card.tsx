import "./cardStyle.scss";
import { propsType } from "./types";
const Card = (props: propsType) => {
    return (
        <div className="card">
            <div className="cardImg">
                <img src={props.img} alt={props.alt} />
            </div>
            <div className="cardTitle">
                <p>{props.title}</p>
            </div>
        </div>
    );
};

export default Card;
