import "./cardStyle.scss";
type cardProps = {
    title: string;
    img: string;
    alt: string;
};
const Card = (props: cardProps) => {
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
