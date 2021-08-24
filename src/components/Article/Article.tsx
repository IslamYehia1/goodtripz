import "./articleStyle.scss";
import articleImg from "../../img/articleImg.jpg";
const Article = () => {
    return (
        <div className="article">
            <div className="articleImg">
                <img src={articleImg} alt="An article about travelling" />
            </div>
            <div className="articleBody">
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
