import style from "./Article.module.scss";
import articleImg from "../../../public/img/articleImg.jpg";
import Image from "next/image";
const Article = () => {
    return (
        <div className={style.article}>
            <div className={style.articleImg}>
                <Image
                    src={articleImg}
                    className={style.img}
                    alt="An article about travelling"
                />
            </div>
            <div className={style.articleBody}>
                <h2>5 ways to prep for your next road trip!</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur consequuntur adipisci magnam ipsa voluptatum,
                    saepe assumenda quas ipsam sit quia eveniet quidem
                    laboriosam, nam amet laudantium! Nihil minima amet harum.
                </p>
            </div>
        </div>
    );
};

export default Article;
