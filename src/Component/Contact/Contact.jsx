import { Helmet } from "react-helmet-async";


const Contact = () => {
    return (
        <div  className="text-2xl text-green-700 text-center">
            <Helmet>
                <title>
                    Book | Contact
                </title>
            </Helmet>
            <h2>Our team endeavors to respond to all messages promptly. <br /> Thank you for your interest in our books and for visiting our website!</h2>
        </div>
    );
};

export default Contact;