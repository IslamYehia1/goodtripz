import SearchForm from "../SearchForm/SearchForm";
import "./home.scss";
type homeProps = {
    children?: React.ReactNode;
    background?: string;
    className: string;
};
const Home = (props: homeProps) => {
    return (
        <main id="homepage">
            <div className="homepage">
                <SearchForm />
            </div>
        </main>
    );
};
export default Home;
