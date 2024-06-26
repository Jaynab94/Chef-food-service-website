import { Helmet } from "react-helmet-async";

const About = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Book | About
                </title>
            </Helmet>
            <div className="space-y-10">
                <h2>About Us</h2>
                <p>Welcome to <strong>Book Vibe</strong>, your go-to destination for [describe what the website offers or its purpose].</p>

                <p>At <strong>Book Vibe</strong>, we are passionate about [mention the main focus or mission of the website]. Our team works tirelessly to provide you with [describe the value or benefits users can expect from the website].</p>

                <h3>Our Mission</h3>
                <p>Our mission is to [state the primary objective or goal of the website]. Through [mention how the mission is achieved], we strive to [describe the desired outcome or impact].</p>

                <h3>What We Offer</h3>
                <ul>
                    <li><strong>Quality Content:</strong> We curate and create content that is informative, engaging, and relevant to our audience.</li>
                    <li><strong>User Experience:</strong> We prioritize user experience, ensuring that our website is easy to navigate and enjoyable to use.</li>
                    <li><strong>Community Engagement:</strong> We foster a vibrant and supportive community where users can connect, share, and learn from each other.</li>
                </ul>

                <h3>Meet the Team</h3>
                <p>Behind <strong>Book Vibe</strong> is a dedicated team of [mention number of team members] individuals who are passionate about [mention what the team is passionate about]. Learn more about our team <a href="/team">here</a>.</p>

                <h3>Contact Us</h3>
                <p>Have questions or feedback? We'd love to hear from you! Reach out to us <a href="/contact">here</a>.</p>

                <p>Thank you for visiting <strong>Book Vibe</strong>. We hope you enjoy your time here!</p>
            </div>
        </div>
        
    );
};

export default About;