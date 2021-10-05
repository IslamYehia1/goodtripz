import style from "./Card.module.scss";
import { propsType } from "./types";
import Image from "next/image";
const Card = (props: propsType) => {
    return (
        <div className={`${style.card} ${props.className}`}>
            <div className={style.cardImg}>
                <Image priority={true} src={props.img} alt={props.alt} />
            </div>
            <div className={style.cardTitle}>
                <p>{props.title}</p>
            </div>
        </div>
    );
};

export default Card;
