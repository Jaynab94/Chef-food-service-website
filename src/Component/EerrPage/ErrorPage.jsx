import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-2xl text-center text-red-600 mt-20">
            <h3>404 ||
                This page could not be found.</h3>
            <Link to={'/'}><button className="btn mt-10 btn-secondary">Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;