import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Books from "../BooksSection/Books";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Book | Home
                </title>
            </Helmet>
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;