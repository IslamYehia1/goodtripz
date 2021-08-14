type homeProps = {
    children?: React.ReactNode;
    background?: string;
};
const Home = (props: homeProps) => {
    return <>{props.children}</>;
};
export default Home;
